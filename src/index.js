// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = async (prop) => {
  return prop;
};

const createNotEnumerableProperty = (prop) => {
  Object.defineProperty(Object.prototype, prop, {
    enumerable: false,
    value: 'value'
});
  return prop;
};

const createProtoMagicObject = () => {
  var magicProto = new Function();
  magicProto.prototype = magicProto.__proto__;
  return magicProto;
};

let incCount = 0;
const incrementor = () => {
  incCount++;
  Function.prototype.valueOf = function () {
      return incCount;
  }
  return incrementor;
};

let asyncCount = 0;
const asyncIncrementor = () => {
  return new Promise((resolve, reject) => {
    asyncCount++;
    return resolve(asyncCount);
    })
};

const createIncrementer = (a) => {
  return a++;
};

// return same argument not earlier than in one second, and not later, than in two

const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};

const createSerializedObject = () => {
  return null;
};

const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
