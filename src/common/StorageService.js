import { AsyncStorage } from "react-native";

export class StorageService {
    static singleInstance = null;

    static _singleInstance() {
        return StorageService.singleInstance || (StorageService.singleInstance = new StorageService());
    }

    async getAllStorage() {
        const keys = await AsyncStorage.getAllKeys();

        for (let key of keys) {
            AsyncStorage.getItem(key, (res) => {
                console.log({
                    key: key,
                    value: res
                });
            });
        }
    }

    async exists(key) {
        const allKeys = await AsyncStorage.getAllKeys();
        return allKeys.some(x => x === key);
    }

    async retrieve(key) {
        const storedValue = await AsyncStorage.getItem(key);

        try {
            return JSON.parse(storedValue);
        } catch (e) {
            return storedValue;
        }
    }

    async store(key, value) {
        const storeValue = JSON.stringify(value);
        try {
            return await AsyncStorage.setItem(key, storeValue);
        } catch (e) {
            console.error(e);
        }
    }

    async remove(key) {
        return await AsyncStorage.removeItem(key);
    }

    async clear() {
        return await AsyncStorage.clear();
    }
}

const storageService = StorageService._singleInstance();

export default storageService;