package dev.tcode.thinmpr.audio.dto

data class SongDTO (
    val id: String,
    val name: String,
    val albumId: String,
    val albumName: String,
    val artistId: String,
    val artistName: String,
    val imageId: String,
    val duration: Double,
    val trackNumber: Double
)