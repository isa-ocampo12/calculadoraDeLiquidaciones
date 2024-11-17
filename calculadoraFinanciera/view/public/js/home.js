document.querySelector('#btnCalcular').addEventListener('click', () => {
  
    const salario = parseFloat(document.getElementById('salario').value);
    const diasTrabajados = parseInt(document.getElementById('diasTrabajados').value);
    const vacacionesPendientes = parseInt(document.getElementById('vacacionesPendientes').value);
    const prima = parseFloat(document.getElementById('prima').value);
    const indemnizacion = parseFloat(document.getElementById('indemnizacion').value);
  
    if (isNaN(salario) || isNaN(diasTrabajados) || isNaN(vacacionesPendientes) || isNaN(prima) || isNaN(indemnizacion)) {
        alert("ingrese valores válidos en todos los campos.");
        return;
    }
  
    const sueldoProporcional = (salario / 30) * diasTrabajados;
    const vacacionesProporcionales = (salario / 30) * vacacionesPendientes;
    const totalLiquidacion = sueldoProporcional + vacacionesProporcionales + prima + indemnizacion;
  
  
    localStorage.setItem("sueldoProporcional", sueldoProporcional.toFixed(2));
    localStorage.setItem("vacacionesProporcionales", vacacionesProporcionales.toFixed(2));
    localStorage.setItem("prima", prima.toFixed(2));
    localStorage.setItem("indemnizacion", indemnizacion.toFixed(2));
    localStorage.setItem("totalLiquidacion", totalLiquidacion.toFixed(2));
  
    window.location.href = '/view/pages/resultado.html'
  })