protocol MusicPlayerContract {
    func start(list: [SongModelContract], currentIndex: Int, repeatMode: RepeatMode, shuffleMode: ShuffleMode, sendPlaybackSongChange: @escaping (SongModelContract) -> Void, sendIsPlayingChange: @escaping (Bool) -> Void)

    func play()

    func pause()

    func prev()

    func next()

    func seek(time: TimeInterval)
    
    func getCurrentSong() -> SongModelContract?
    
    func getCurrentTime() -> Int

    func setRepeat(repeatMode: RepeatMode)

    func setShuffle(shuffleMode: ShuffleMode)
}
