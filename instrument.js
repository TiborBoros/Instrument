const instrumentProtoCreator = (name) => {
    const instrument = ((name) => {
        const _name = name;
        return {
            get name() { return _name; },
            set name(name) { console.warn(`The "name" property of the ${this.name} object is private. Can not be changed!`); }
        };
    })(name);

    return instrument;
};

function currencPairCreator(name, base, quote) {
    const instrumentProto = instrumentProtoCreator(name);
    const currencyPairProto = ((base, quote) => {
        const _base = base;
        const _quote = quote;
        return {
            get baseCurrency() { return _base; },
            set baseCurrency(base) { console.warn(`The "baseCurrency" property of the ${this.name} object is private. Can not be changed!`); },
            get quoteCurrency() { return _quote; },
            set quoteCurrency(quote) { console.warn(`The "quoteCurrency" property of the ${this.name} object is private. Can not be changed!`); },
        };
    })(base, quote);
    const currencyPair = {
        printPrice() { console.log("Printing price..."); }
    };
    Object.setPrototypeOf(currencyPairProto, instrumentProto);
    Object.setPrototypeOf(currencyPair, currencyPairProto);
    return currencyPair;
}