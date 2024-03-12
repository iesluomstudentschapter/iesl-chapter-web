export class BlogPost {
    id: any;
    title: string;
    content: string;
    author: string;
    date: Date;
    imageUrl: string;

    constructor(title: string, content: string, author: string, date: Date, imageUrl: string) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.date = date;
        this.imageUrl = imageUrl;
    }
}
