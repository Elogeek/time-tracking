/** import Storage from './storage';

/**
 * by setting the locals to the storage generic
 * === only the keys from this enumeration can be used in the get, set, clearItem and clearItems methods.
 */
enum Locals {
    ACCESS_TOKEN = 'access_token',
    REFRESH_TOKEN = 'refresh_token'
}

/**
 * I am using the singleton because I want only one instance of the Token class.
 * Adding private to the constructor will prevent the creation of an instance.

export default class Tokens extends Storage<Locals> {
    private static instance?: Tokens;

    private constructor() {
        super();
    }

    /**
     * Returns the cached instance or will create a new one.

    public static getInstance() {
        if (!this.instance) {
            this.instance = new Tokens();
        }

        return this.instance;
    }

    /**
     *  Methods that will process our data
     *  They work with an access token.

    public getAccessToken() {
        return this.get(Locals.ACCESS_TOKEN);
    }

    public setAccessToken(accessToken: string) {
        this.set(Locals.ACCESS_TOKEN, accessToken);
    }

    public getRefreshToken() {
        return this.get(Locals.REFRESH_TOKEN);
    }

    public setRefreshToken(refreshToken: string) {
        this.set(Locals.REFRESH_TOKEN, refreshToken);
    }

    public clear() {
        this.clearItems([Locals.ACCESS_TOKEN, Locals.REFRESH_TOKEN]);
    }

}
*/