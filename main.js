// Función para rastrear el paquete
function trackPackage() {
    const trackingNumber = document.getElementById('trackingNumber').value.trim();

    // Validar que el número de seguimiento no esté vacío
    if (trackingNumber === "") {
        alert("Por favor, ingresa un número de seguimiento.");
        return;
    }

    // Definir patrones para las paqueterías de AliExpress
    const carriers = [
        {
            name: 'Cainiao (CNMEX)',
            pattern: /^CNMEX[0-9]{10}$/, // Patrones para Cainiao México (CNMEX seguido de 10 dígitos)
            url: 'https://global.cainiao.com/detail.htm?mailNoList='
        },
        {
            name: 'Cainiao',
            pattern: /^LP[0-9]{14}CN$/, // Patrones para Cainiao (LP seguido de 14 dígitos y CN)
            url: 'https://global.cainiao.com/detail.htm?mailNoList='
        },
        {
            name: 'China Post',
            pattern: /^[A-Z]{2}[0-9]{9}[A-Z]{2}$/, // Patrones para China Post
            url: 'http://track.yw56.com.cn/en-US?number='
        },
        {
            name: 'Yanwen',
            pattern: /^YT[0-9]{12}$/, // Patrones para Yanwen (YT seguido de 12 dígitos)
            url: 'https://track.yw56.com.cn/en-US?number='
        },
        {
            name: '4PX',
            pattern: /^[0-9]{13}$/, // Patrones para 4PX (13 dígitos)
            url: 'https://track.4px.com/?trackingNumber='
        },
        {
            name: 'SunYou',
            pattern: /^SY[0-9]{13}$/, // Patrones para SunYou (SY seguido de 13 dígitos)
            url: 'http://parcelsapp.com/en/tracking/'
        },
        {
            name: 'DHL',
            pattern: /^[0-9]{10}$/, // Patrones para DHL (10 dígitos)
            url: 'https://www.dhl.com/global-en/home/tracking.html?tracking-id='
        },
        {
            name: 'FedEx',
            pattern: /^[0-9]{12,14}$/, // Patrones para FedEx (12 o 14 dígitos)
            url: 'https://www.fedex.com/fedextrack/?tracknumbers='
        }
    ];

    // Buscar la paquetería correspondiente
    let carrier = carriers.find(c => c.pattern.test(trackingNumber));

    if (carrier) {
        // Redirigir a la página de rastreo con el número de seguimiento
        window.location.href = carrier.url + trackingNumber;
    } else {
        alert("Número de seguimiento no reconocido. Verifica el número e inténtalo de nuevo.");
    }
}