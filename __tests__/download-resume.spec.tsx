import { createMocks } from 'node-mocks-http';

import handler from '../pages/api/download-resume';

describe('/api/download-resume', () => {
  it('should serve markdown file when format=md', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: { format: 'md' }
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getHeaders()['content-type']).toBe('text/markdown');
    expect(res._getHeaders()['content-disposition']).toContain(
      'Fernando_Ibanez_Resume.md'
    );
  });

  it('should serve PDF file when format=pdf', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: { format: 'pdf' }
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getHeaders()['content-type']).toBe('application/pdf');
    expect(res._getHeaders()['content-disposition']).toContain(
      'Fernando_Ibanez_Resume.pdf'
    );
  });

  it('should serve HTML when format=html', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: { format: 'html' }
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getHeaders()['content-type']).toBe('text/html');
    expect(res._getData()).toContain('<!DOCTYPE html>');
  });

  it('should return error for invalid format', async () => {
    const { req, res } = createMocks({
      method: 'GET',
      query: { format: 'invalid' }
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(JSON.parse(res._getData())).toEqual({
      message: 'Invalid format. Use "md", "pdf", or "html"'
    });
  });

  it('should return 405 for non-GET methods', async () => {
    const { req, res } = createMocks({
      method: 'POST'
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(405);
    expect(JSON.parse(res._getData())).toEqual({
      message: 'Method not allowed'
    });
  });
});
