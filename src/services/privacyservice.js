const privacyServicePro = {
    updatePrivacySettings: (data) => fetch('/api/privacy/settings/pro', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
};
export default privacyServicePro;