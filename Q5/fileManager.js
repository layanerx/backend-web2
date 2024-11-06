const fs = require('fs');


async function readJsonFile(filePath) {
    try {
         const data = await fs.promises.readFile(filePath);
        return JSON.parse(data);
    }
    catch (err) {

        console.error(`Erro ao ler o arquivo ${filePath}:`, err);
        throw new Error(`Não foi possível ler o arquivo: ${filePath}`);
}
}

async function writeJsonFile(filePath, data) {
    try {
        
        const jsonData = JSON.stringify(data, null, 2); 

        await fs.promises.writeFile(filePath, jsonData);
        
        console.log(`Arquivo ${filePath} salvo com sucesso!`);
    }
    catch (err) {
        
        console.error(`Erro ao escrever o arquivo ${filePath}:`, err);
        throw new Error(`Não foi possível escrever o arquivo: ${filePath}`);
}
}
