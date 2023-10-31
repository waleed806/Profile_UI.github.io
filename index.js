    const phoneNumber = '7006777471';
    const message = 'Hello'; 
    document.getElementById('whatsappButton').addEventListener('click', function() {
      
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      window.location.href = whatsappURL;
    });
