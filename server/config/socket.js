const socketIo = require('socket.io');
const configureSocket = (server) => {
    const io = socketIo(server, { cors: { origin: '*', methods: ['GET', 'POST'], credentials: true } });
    const activeUsers = {};
    io.on('connection', (socket) => {
        console.log('✅ User connected:', socket.id);
        socket.on('join-group', (groupId, userId) => {
            socket.join(`group-${groupId}`);
            activeUsers[socket.id] = { userId, groupId };
            io.to(`group-${groupId}`).emit('user-joined', { userId });
        });
        socket.on('send-message', (data) => {
            io.to(`group-${data.groupId}`).emit('receive-message', data);
        });
        socket.on('message-read', (data) => {
            io.to(`group-${data.groupId}`).emit('message-status-update', data);
        });
        socket.on('disconnect', () => {
            delete activeUsers[socket.id];
            console.log('❌ User disconnected:', socket.id);
        });
    });
    return io;
};
module.exports = configureSocket;