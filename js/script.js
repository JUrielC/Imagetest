console.log("hola")

fetch('https://s3-giant-motors-crm-media-dev.s3.amazonaws.com/Products/phygital-logos-new/j7_25.png',
    {
        method: 'GET',
    }
)
    .then(response => {
        if (response.ok) {
            return response.blob();
        }
        throw new Error('No se pudo cargar la imagen');
    })
    .then(blob => {
        const imgUrl = URL.createObjectURL(blob);

        const imgElement = document.createElement('img');
        imgElement.alt = 'Descripción de la imagen';
        imgElement.width = 500;

        const container = document.getElementById('image-container');
        container.appendChild(imgElement);
    })
    .catch(error => {
        console.error('Error al cargar la imagen:', error);
    });


fetch('https://s3-giant-motors-crm-media-dev.s3.us-east-1.amazonaws.com/Products/phygital-logos-new/36_30_E_J7_vE+J7+2024_Logo.jpg')
    .then(response => {
        if (response.ok) {
            return response.blob();
        }
        throw new Error('No se pudo cargar la imagen');
    })
    .then(blob => {
        const imgUrl = URL.createObjectURL(blob);

        const imgElement = document.createElement('img');
        imgElement.alt = 'Descripción de la imagen';
        imgElement.width = 500;
        const container = document.getElementById('image-container-2');
        container.appendChild(imgElement);
    })
    .catch(error => {
        console.error('Error al cargar la imagen:', error);
    });
