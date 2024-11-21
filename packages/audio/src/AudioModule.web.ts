import { registerWebModule, NativeModule } from 'expo';

import { AudioModuleEvents } from './Audio.types';

class AudioModule extends NativeModule<AudioModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(AudioModule);
