import { /* describe, */ expect, test } from '@jest/globals';
import { Converter } from '../Converter';

const converter: Converter = new Converter();

test('Converter return string', () => {
  expect(typeof converter.markdownToHTML('')).toBe('string');
});

test('title test', () => {
  expect(converter.markdownToHTML('# title')).toBe('<h1>title</h1>');
  expect(converter.markdownToHTML('- # title')).toBe('<ul><li><h1>title</h1></li></ul>');
});

test('image test', () => {
  expect(converter.markdownToHTML('![[picture.png]]')).toBe('<img src="/picture.png" alt="picture.png"/>');
});

test('internalLink test', () => {
  expect(converter.markdownToHTML('[[test]]')).toBe('<p><a href="/test">test</a></p>');
  converter.setPrefix('/api');
  expect(converter.markdownToHTML('[[test]]')).toBe('<p><a href="/api/test">test</a></p>');
});

test('externalLink test', () => {
  expect(converter.markdownToHTML('[test](http://example.com)')).toBe('<p><a href="http://example.com/" target="blank">test</a></p>');
});

test('bold test', () => {
  expect(converter.markdownToHTML('**bold**')).toBe('<p><b>bold</b></p>');
  expect(converter.markdownToHTML('__bold__')).toBe('<p><b>bold</b></p>');
});

test('cursive test', () => {
  expect(converter.markdownToHTML('*cursive*')).toBe('<p><i>cursive</i></p>');
  expect(converter.markdownToHTML('_cursive_')).toBe('<p><i>cursive</i></p>');
});

test('longSpace test', () => {
  expect(converter.markdownToHTML('   test   ')).toBe('<p> test </p>');
});

test('ul test', () => {
  expect(converter.markdownToHTML('- test')).toBe('<ul><li>test</li></ul>');
});

test('ol test', () => {
  expect(converter.markdownToHTML('3. test')).toBe('<ol start="3"><li>test</li></ol>');
});
