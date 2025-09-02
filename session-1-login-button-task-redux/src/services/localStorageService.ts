export const getDataFromLocalStorage = (key: string) => {
  var localStorageData =
    localStorage.length > 0 && localStorage.getItem(key)
      ? localStorage.getItem(key)
      : null;
  if (localStorageData) {
    localStorageData = JSON.parse(localStorageData);
  }
  return localStorageData;
};

// export function getDataFromLocalStorage<T>(key: string): T | null | string {
//   var localStorageData: T | null | string =
//     localStorage.length > 0 && localStorage.getItem(key)
//       ? localStorage.getItem(key)
//       : null;
//   if (localStorageData) {
//     localStorageData = JSON.parse(localStorageData);
//   }
//   return localStorageData;
// }
