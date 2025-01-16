const profileVerificationServicePro = {
    submitVerification: (data) => fetch('/api/verification/submit/pro', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
};
export default profileVerificationServicePro;