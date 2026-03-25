'use strict';

const users = [];

const createUser = (user) => {
    users.push(user);
    return user;
};

const getUser = (userId) => {
    return users.find(user => user.id === userId);
};

const updateUser = (userId, newData) => {
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
        users[index] = { ...users[index], ...newData };
        return users[index];
    }
    return null;
};

const deleteUser = (userId) => {
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
    return null;
};

module.exports = { createUser, getUser, updateUser, deleteUser };