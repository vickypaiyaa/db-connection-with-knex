/**
 * Created by vicky on 25/03/2017.
 */

'use strict';

module.exports = {
    development: {
        client: 'pg',
        connection : {
            host:'localhost',
            user:'postgres',
            password: 'postgres',
            database: 'test',
            port:5432
        }
    }
};

