// storage.js

// Приймає `key`, по якому буде відбуватись вибірка.
const load = key => {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

// Приймає ключ `key` і значення `value`.
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};

// Приймає `key`, по якому буде відбуватись вибірка, та видаляє по `key`.
const remove = key => {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? undefined : localStorage.removeItem(key);
  } catch (error) {}
};

export default { load, save, remove };
