import { expect, test } from 'vitest';
import { Slug } from './slug';

test('Slug creation from text', () => {
    const slug = Slug.createFromText('Hello World!');
    expect(slug.value).toEqual('hello-world');
});
