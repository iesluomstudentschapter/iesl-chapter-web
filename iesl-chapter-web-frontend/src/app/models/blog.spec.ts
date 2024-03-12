import { BlogPost } from './blog';

describe('BlogPost', () => {
  it('should create an instance', () => {
    expect(new BlogPost('', '', '', new Date(), '')).toBeTruthy();
  });
});
