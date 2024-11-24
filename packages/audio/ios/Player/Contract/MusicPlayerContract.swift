protocol MusicPlayerContract {
    func start(list: [SongModelContract], currentIndex: Int)

    func play()

    func pause()

    func prev()

    func next()

    func seek(time: TimeInterval)
    
    func getCurrentSong() -> SongModelContract?
    
    func getDuration() -> Double
    
    func getCurrentTime() -> Double

    // func setRepeat(repeatMode: RepeatMode)

    // func setShuffle(shuffleMode: ShuffleMode)
}