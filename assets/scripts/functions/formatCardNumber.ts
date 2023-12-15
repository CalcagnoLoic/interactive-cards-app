export const formatCardNumber = (value: string): string => {
    return value
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
        .slice(0, 19);
};
