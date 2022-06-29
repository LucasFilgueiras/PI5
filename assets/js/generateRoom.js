function createRoom() {
    while(isRoom) {
        for (let i = 0; i < 4; i++) {
            i == 0 ? roomId = Math.floor(Math.random() * 10).toString() :
                roomId += Math.floor(Math.random() * 10).toString();
        }
        let roomsExistIds;
        isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId);
    }
}