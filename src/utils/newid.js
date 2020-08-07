let lastId = 0;

function newId(prefix='element-') {
    lastId++;
    return `${prefix}${lastId}`;
}

export default newId;
