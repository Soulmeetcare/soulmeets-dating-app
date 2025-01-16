const paymentServicePro = {
    processPayment: (data) => fetch('/api/payment/charge/pro', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
};
export default paymentServicePro;