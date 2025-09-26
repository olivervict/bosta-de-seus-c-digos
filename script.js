function cadastrarCliente() {

    const nome = document.getElementById('nome').value.trim();
    
    const email = document.getElementById('email').value.trim();
    
    const telefone = document.getElementById('telefone').value.trim();
    
    if (!nome || !email || !telefone) {
    
    alert('Preencha todos os campos!');
    
    return;
    
    }
    
    const tabela = document.querySelector('#tabela tbody');
    
    const linha = document.createElement('tr');
    
    linha.innerHTML = `<td>${nome}</td><td>${email}</td><td>${telefone}</td>`;
    
    tabela.appendChild(linha);
    
    document.getElementById('nome').value = '';
    
    document.getElementById('email').value = '';
    
    document.getElementById('telefone').value = '';
    
    }
    
    function gerarPDF() {
    
    const { jsPDF } = window.jspdf;
    
    const doc = new jsPDF();
    
    doc.setFontSize(14);
    
    doc.text('Lista de Clientes', 14, 14);
    
    const linhasTabela = document.querySelectorAll('#tabela tbody tr');
    
    const dados = [];
    
    linhasTabela.forEach((linha) => {
    
    const nome = linha.children[0].innerText;
    
    const email = linha.children[1].innerText;
    
    const telefone = linha.children[2].innerText;
    
    dados.push([nome, email, telefone]);
    
    });
    
    doc.autoTable({
    
    head: [['Nome', 'Email', 'Telefone']],
    
    body: dados,
    
    startY: 20,
    
    styles: { fontSize: 10, cellPadding: 3 },
    
    columnStyles: {
    
    0: { cellWidth: 'auto' },
    
    1: { cellWidth: 'auto' },
    
    2: { cellWidth: 'auto' }
    
    }
    
    });
    
    doc.save('clientes.pdf');
    
    }