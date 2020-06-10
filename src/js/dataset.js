import {Model} from "./Model";

export class DataSet {
    constructor(params = {
        host: 'http://localhost:5000/',
        model: Model,
        object: "person"
    }) {
        this.params = params;
        this.params.host = 'http://localhost:5000/';
    }

    query (query, options, params) {
        let url = new URL(this.params.host);
        url.pathname += query;
        for (let k in params) {
            url.searchParams.set(k, params[k]);
        }

        return fetch(url, options)
            .then( response => response.json() );
    }

    toModel(res) {
        return new (this.params.model)(res);
    }

    read(id) {
        return this.query(
            `${this.params.object}/${id || ''}`,
            {
                method: 'GET'
            });
    }

    list(page = 1, limit = 10) {
        return this.query(
            `${this.params.object}/`,
            {
                method: 'GET'
            },
            {
                '_page': page,
                '_limit': limit,
            });
    }

    create(data) {
        return this.query(
            `${this.params.object}`,
            {
                method: 'POST',
                body: data
            });
    }

    delete(id) {
        return this.query(
            `${this.params.object}/${id}`,
            {
                method: 'DELETE'
            });
    }

    update(id, data) {
        return this.query(
            `${this.params.object}/${id}`,
            {
                method: 'PATCH',
                body: data,
            });
    };
}