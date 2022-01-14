export default class UserRecord {
    meta: meta;
    data: data[];
}

interface data {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
}

class meta {
    pagination: pagination;
}

class pagination {
    total: number;
    pages: number;
    page: number;
    limit: number;
    links: Link;
}

class Link {
    previous: string;
    current: string;
    next: string;
}