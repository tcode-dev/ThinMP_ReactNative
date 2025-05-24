package dev.tcode.thinmpr.audio.constant

enum class RepeatMode(val raw: Int) {
    OFF(0),
    ONE(1),
    ALL(2);

    companion object {
        fun ofRaw(raw: Int): RepeatMode? {
            return values().firstOrNull { it.raw == raw }
        }
    }
}

enum class ShuffleMode(val raw: Int) {
    OFF(0),
    ON(1);

    companion object {
        fun ofRaw(raw: Int): ShuffleMode? {
            return values().firstOrNull { it.raw == raw }
        }
    }
}
