import MediaPlayer

class Id {
    var raw: MPMediaEntityPersistentID

    init(id: Any) {
        if let id = id as? MPMediaEntityPersistentID {
            self.raw = id
        } else if let idString = id as? String, let id = UInt64(idString) {
            self.raw = id
        } else {
            fatalError("Invalid id type")
        }
    }
}
