# 🚀 Portfólio Acadêmico Modelo — Etec Pedro Ferreira Alves & AMS

> **Curso Técnico em Desenvolvimento de Sistemas**  
> **Programa AMS (Articulação da Formação Profissional Média e Superior — Etec Pedro Ferreira Alves & Fatec Mogi Mirim)**  
> **Orientação:** Prof. Marcos Roberto de Moraes (Maromo)

---

## 📖 Visão Geral do Projeto

Este projeto é um modelo de **Portfólio Web Pessoal e Acadêmico** projetado para estudantes de tecnologia e desenvolvimento de software. Ele foi construído com tecnologias web modernas, incorporando:

- **Bootstrap 5.3 (via CDN)** para sistema de grid responsivo e componentes acessíveis.
- **Dark Mode Profundo** inspirado em plataformas modernas de desenvolvedores (GitHub, Linear, Vercel).
- **Efeito Glassmorphism** com desfoque de fundo (`backdrop-filter`), bordas translúcidas sutis e relevo visual.
- **Ilustrações Vetoriais SVG Nativas** leves e escaláveis para avatares e banners de projetos.
- **Estrutura Semântica HTML5** preparada para SEO, leitores de tela e alta performance de carregamento.

---

## 📁 Estrutura de Arquivos

```text
portfolio-exemplo/
├── index.html              # Página única contendo todas as seções semânticas
├── README.md               # Tutorial didático passo a passo de publicação
├── css/
│   └── style.css           # Estilos customizados (Dark Mode, Glassmorphism, Variáveis CSS)
└── assets/
    └── images/
        ├── avatar.svg            # Ilustração do perfil do estudante desenvolvedor
        ├── projeto-logica.svg     # Banner temático: Algoritmos e Linguagem C
        ├── projeto-redes.svg      # Banner temático: Redes e Cisco Packet Tracer
        ├── projeto-uiux.svg       # Banner temático: Prototipagem Mobile e Figma
        ├── projeto-web.svg        # Banner temático: Desenvolvimento Front-End Web
        └── projeto-hackathon.svg  # Banner temático: Maratona de Programação / Dev Day
```

---

## 🛠️ Guia Passo a Passo: Do Repositório ao Ar (Deploy Gratuito)

Siga os quatro passos abaixo para publicar seu portfólio na internet de forma 100% gratuita utilizando o **GitHub** e a **Vercel**.

---

### Passo 1: Criando o Repositório Vazio no GitHub

1. Acesse sua conta no [GitHub](https://github.com/) (caso não possua conta, cadastre-se gratuitamente).
2. No canto superior direito da tela, clique no ícone **`+`** e selecione **`New repository`** (Novo Repositório).
3. Preencha as configurações iniciais:
   - **Repository name:** `meu-portfolio-ams` (ou o nome de sua preferência, sem espaços ou acentos).
   - **Description (opcional):** `Portfólio acadêmico desenvolvido no curso técnico de Desenvolvimento de Sistemas na Etec Pedro Ferreira Alves`.
   - **Public / Private:** Marque **`Public`** (necessário para que seu projeto possa ser visualizado e conectado facilmente à Vercel).
   - **Initialize this repository with:** Deixe desmarcadas as opções de *Add a README file*, *.gitignore* e *license* (pois já temos esses arquivos prontos).
4. Clique no botão verde **`Create repository`**.

---

### Passo 2: Subindo os Arquivos para o GitHub

Você pode escolher a opção que melhor se adapta ao seu nível de familiaridade:

#### Opção A: Via Terminal (Git CLI) — *Recomendado para formação técnica*
Abra o terminal (Git Bash, Prompt de Comando ou terminal integrado do VS Code) dentro da pasta `portfolio-exemplo` e execute a sequência de comandos:

```bash
# 1. Inicializa o repositório local
git init

# 2. Adiciona todos os arquivos ao controle de versão
git add .

# 3. Cria o primeiro commit
git commit -m "feat: publicando meu portfólio acadêmico etec ams"

# 4. Define a branch principal como main
git branch -M main

# 5. Vincula ao seu repositório remoto no GitHub (substitua pelo link do seu repositório criado no Passo 1)
git remote add origin https://github.com/SEU-USUARIO/meu-portfolio-ams.git

# 6. Envia os arquivos para o GitHub
git push -u origin main
```

#### Opção B: Via Interface Web do GitHub (Arrastar e Soltar)
1. Na tela do repositório vazio que você acabou de criar no GitHub, clique no link **`uploading an existing file`**.
2. Arraste a pasta inteira ou selecione todos os arquivos (`index.html`, `README.md`, pasta `css` e pasta `assets`).
3. No campo inferior *Commit changes*, escreva: `Primeiro envio do portfólio`.
4. Clique em **`Commit changes`**.

---

### Passo 3: Conectando e Publicando Gratuitamente na Vercel

A **Vercel** é uma das plataformas em nuvem mais rápidas do mundo para hospedar páginas estáticas e aplicações web front-end. Cada vez que você atualizar seu código no GitHub, a Vercel republica seu site automaticamente.

1. Acesse o site oficial: [vercel.com](https://vercel.com/) e clique em **`Sign Up`**.
2. Escolha **`Continue with GitHub`** para autenticar diretamente com sua conta onde o código está salvo.
3. No painel principal (*Dashboard*) da Vercel, clique no botão azul **`Add New...`** e selecione **`Project`**.
4. Na lista de repositórios do GitHub apresentada, localize `meu-portfolio-ams` e clique no botão **`Import`**.
5. Na tela de configuração de Deploy (*Configure Project*):
   - **Project Name:** Pode manter o nome sugerido.
   - **Framework Preset:** Deixe como `Other` (pois é um projeto estático em HTML/CSS nativo).
   - **Root Directory:** Mantenha `./`.
   - Não é necessário preencher nenhuma variável de ambiente (*Environment Variables*).
6. Clique no botão **`Deploy`**.
7. Aguarde cerca de 15 a 30 segundos. Uma tela com confetes surgirá anunciando **`Congratulations!`**.
8. Clique na prévia da tela ou no link gerado (ex: `https://meu-portfolio-ams.vercel.app`) para ver seu portfólio funcionando na web em qualquer celular ou computador!

---

### Passo 4: Dicas para Personalizar o Portfólio com Seus Dados

Abra o projeto no seu editor de código preferido (como o **VS Code**) e faça as seguintes adaptações no arquivo `index.html`:

1. **Seu Nome e Mini-Bio (Hero Section):**
   - Localize o trecho `[Nome do Aluno]` e substitua pelo seu nome completo ou nome profissional.
   - Ajuste a descrição para refletir seus interesses genuínos (ex.: preferência por desenvolvimento back-end, mobile, segurança ou jogos).

2. **Seus Projetos Pessoais:**
   - Na seção `#projetos`, substitua os títulos e descrições pelos projetos que você realmente desenvolveu em sala de aula ou em feiras tecnológicas.
   - Atualize os links `href="https://github.com/..."` para apontar diretamente para os seus repositórios reais de código.

3. **Canais de Contato:**
   - Na seção `#contato`, atualize seu e-mail institucional (`@etec.sp.gov.br`), o link do seu perfil no **LinkedIn** e o seu usuário do **GitHub**.

4. **Foto ou Avatar:**
   - O projeto já acompanha uma ilustração vetorial em `assets/images/avatar.svg`. Se você preferir usar uma foto real sua, adicione sua imagem na pasta `assets/images/sua-foto.jpg` e altere a tag `<img src="assets/images/avatar.svg" ...>` para `<img src="assets/images/sua-foto.jpg" ...>`.

5. **Ajustes de Paleta de Cores (Opcional):**
   - No arquivo `css/style.css`, você pode alterar os tons das variáveis CSS no bloco `:root` (como `--accent-violet`, `--accent-cyan` e `--accent-emerald`) para criar sua própria identidade visual.

---

## 📚 Competências Pedagógicas Trabalhadas

- **Design Responsivo Mobile-First:** Uso de media queries e classes utilitárias do Bootstrap 5.
- **Glassmorphism & Tendências UI/UX:** Aplicação avançada de `backdrop-filter`, sombras de profundidade e contraste acessível.
- **Git & Versionamento:** Controle de versões distribuído para formação de currículo técnico.
- **DevOps & Integração Contínua (CI/CD):** Publicação automatizada conectando repositório Git a servidores em nuvem.

---

🎓 *Bons estudos e excelente desenvolvimento a todos os alunos da Etec Pedro Ferreira Alves!*
