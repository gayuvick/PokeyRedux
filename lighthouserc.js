var module;
module.exports= {
  ci: {
    collect: {
      numberOfRuns: 1,
      startServerCommand: 'npm run dev',
      staticDistDir: './dist', 
      settings: {
        skipAudits: ['uses-http2'],
        chromeFlags: '--no-sandbox',
        extraHeaders: JSON.stringify({
          Cookie: 'customCookie=1;foo=bar',
        }),
      },
    },
    assert: {
      assertions: {
        'categories:performance': [
          'error',
          { minScore: 0.7, aggregationMethod: 'median-run' },
        ],
        'categories:accessibility': [
          'error',
          { minScore: 0.7, aggregationMethod: 'pessimistic' },
        ],
        'categories:best-practices': [
          'error',
          { minScore: 0.7, aggregationMethod: 'pessimistic' },
        ],
        'categories:seo': [
          'error',
          { minScore: 0.7, aggregationMethod: 'pessimistic' },
        ],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
}