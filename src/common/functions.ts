export const objectWithoutFalsyValues = <T>(obj: T): Partial<T> => {
    const newObj = {} as Partial<T>;

    for (const key in obj) {
        if ((obj[key] as any).length === 0) continue;
        if (obj[key]) {
            newObj[key] = obj[key];
        }
    }

    return newObj;
};
