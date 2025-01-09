import MediaPlayer

class MusicPlayer: MusicPlayerContract {
    static let shared = MusicPlayer()
    private let PREV_SECOND: Double = 3
    private let player: MPMusicPlayerController
    private var sendPlaybackSongChange: (SongModelContract) -> Void = { _ in }
    private var sendIsPlayingChange: (Bool) -> Void = { _ in }
    
    init() {
        player = MPMusicPlayerController.applicationMusicPlayer
        addObserver()
        player.beginGeneratingPlaybackNotifications()
    }
    
    func start(list: [SongModelContract], currentIndex: Int, sendPlaybackSongChange: @escaping (SongModelContract) -> Void, sendIsPlayingChange: @escaping (Bool) -> Void) {
        self.sendPlaybackSongChange = sendPlaybackSongChange
        self.sendIsPlayingChange = sendIsPlayingChange

        if (player.playbackState == MPMusicPlaybackState.playing) {
            player.stop()
        }
        
        let items = MPMediaItemCollection(items: list.map { $0.media.representativeItem! as MPMediaItem })
        let descriptor = MPMusicPlayerMediaItemQueueDescriptor(itemCollection: items)
        
        descriptor.startItem = list[currentIndex].media.representativeItem
        player.setQueue(with: descriptor)
        play()
    }
    
    func play() {
        player.play()
    }
    
    func pause() {
        player.pause()
    }
    
    func prev() {
        if player.currentPlaybackTime <= PREV_SECOND {
            player.skipToPreviousItem()
        } else {
            player.skipToBeginning()
        }
    }
    
    func next() {
        player.skipToNextItem()
    }
    
    func seek(time: TimeInterval) {
        player.currentPlaybackTime = time
    }

    func getCurrentSong() -> SongModelContract? {
        if (player.nowPlayingItem == nil) {
            return nil
        }
        return SongModel(media: MPMediaItemCollection(items: [player.nowPlayingItem! as MPMediaItem]))
    }
    
    func getCurrentTime() -> Int {
        return Int(player.currentPlaybackTime)
    }
    
    func setRepeat(repeatMode: RepeatMode) {
        player.repeatMode = repeatMode == RepeatMode.off ? MPMusicRepeatMode.none
        : repeatMode == RepeatMode.one ? MPMusicRepeatMode.one
        : MPMusicRepeatMode.all
    }
    
    // func setShuffle(shuffleMode: ShuffleMode) {
    //     player.shuffleMode = shuffleMode == ShuffleMode.off ? MPMusicShuffleMode.off : MPMusicShuffleMode.songs
    // }
    
    private func addObserver() {
        NotificationCenter.default.addObserver(
            forName: NSNotification.Name.MPMusicPlayerControllerNowPlayingItemDidChange,
            object: player,
            queue: OperationQueue.main
        ) { _ in
            self.nowPlayingItemDidChangeCallback()
        }
        
        NotificationCenter.default.addObserver(
            forName: NSNotification.Name.MPMusicPlayerControllerPlaybackStateDidChange,
            object: player,
            queue: OperationQueue.main
        ) { _ in
            self.playbackStateDidChangeCallback()
        }
    }
    
    private func removeObserver() {
        NotificationCenter.default.removeObserver(
            self,
            name: NSNotification.Name.MPMusicPlayerControllerNowPlayingItemDidChange,
            object: player
        )
        
        NotificationCenter.default.removeObserver(
            self,
            name: NSNotification.Name.MPMusicPlayerControllerPlaybackStateDidChange,
            object: player
        )
    }
    
    private func nowPlayingItemDidChangeCallback() {
        if let song = getCurrentSong() {
            sendPlaybackSongChange(song)
        }
    }
    
    private func playbackStateDidChangeCallback() {
        switch player.playbackState {
        case MPMusicPlaybackState.stopped:
            
            break
        case MPMusicPlaybackState.playing:
            sendIsPlayingChange(true)
            
            break
        case MPMusicPlaybackState.paused:
            sendIsPlayingChange(false)
            
            break
        case MPMusicPlaybackState.interrupted:
            
            break
        case MPMusicPlaybackState.seekingForward:
            
            break
        case MPMusicPlaybackState.seekingBackward:
            
            break
        default:
            
            break
        }
    }
    
    deinit {
        removeObserver()
        
        player.endGeneratingPlaybackNotifications()
    }
}
