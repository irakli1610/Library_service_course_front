export const oktaConfig = {
    clientId: '0oaal33rv4B6o1TJ75d7',
    issuer: 'https://dev-54056701.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}