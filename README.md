# Dois Tons

PWA musical privada para duas pessoas, com identidade Terracota e funcionamento em iPhone e Windows.

## O que esta etapa entrega

- acesso real com um código secreto compartilhado;
- uma identidade separada para cada aparelho;
- limite de duas pessoas na sala;
- recuperação de um aparelho usando o mesmo nome e o código;
- músicas e capas em armazenamento privado;
- upload pelo iPhone ou pelo computador;
- importação de várias músicas ou de uma pasta inteira pelo Windows;
- identificação automática de título, artista, álbum, duração e capa incorporada;
- fila de envio com progresso, interrupção segura e prevenção de duplicatas;
- reprodução individual em cada aparelho;
- favoritas compartilhadas;
- envio de músicas para a outra pessoa;
- playlists criadas e editadas pelos dois;
- Jam com play, pause, troca de música e posição sincronizados;
- atualização automática da biblioteca nos dois aparelhos;
- instalação como PWA pela tela inicial do iPhone;
- modo de demonstração enquanto o Supabase não estiver configurado.

## Configurar a nuvem gratuita

### 1. Criar o projeto

Crie um projeto gratuito em [supabase.com](https://supabase.com/). Guarde a senha do banco em um local seguro.

### 2. Ativar usuários anônimos

No painel do projeto, abra **Authentication**, localize a opção de login anônimo e ative **Anonymous Sign-Ins**.

O aplicativo cria uma sessão diferente em cada iPhone. Essa sessão não substitui o código da sala: as duas proteções trabalham juntas.

### 3. Criar o banco e o armazenamento

Abra **SQL Editor**, crie uma consulta, copie todo o conteúdo de [`supabase/schema.sql`](supabase/schema.sql) e execute.

O script cria as tabelas, o bucket privado, as políticas de acesso e as funções da Jam.

Se você já executou o arquivo `schema.sql` em uma etapa anterior, não precisa repetir tudo. Abra uma nova consulta no **SQL Editor**, copie o conteúdo de [`supabase/catalog-import.sql`](supabase/catalog-import.sql) e clique em **Run**. Essa atualização adiciona somente os campos usados pelo importador e libera o formato FLAC.

### 4. Definir o código secreto

Ainda no SQL Editor, execute apenas uma vez, trocando o exemplo por um código com 8 a 64 caracteres:

```sql
select private.configure_room('troque-por-um-codigo-forte','Dois Tons');
```

Se quiser alterar o código no futuro, execute a mesma linha com o novo valor. O banco guarda somente uma representação protegida do código.

### 5. Conectar o aplicativo

No painel do Supabase, copie:

- a **Project URL**;
- a chave **Publishable** (`sb_publishable_...`). Se o projeto mostrar apenas chaves antigas, crie uma chave publicável em **Settings > API Keys**.

Edite `assets/js/supabase-config.js`:

```javascript
window.DOIS_TONS_CONFIG = {
    supabaseUrl:"https://SEU-PROJETO.supabase.co",
    supabaseKey:"SUA_CHAVE_PUBLICAVEL"
}
```

Use somente a chave pública. Nunca coloque uma chave `service_role`, `secret` ou a senha do banco dentro do aplicativo.

### 6. Testar no computador

No terminal, dentro da pasta `dois-tons`, execute:

```bash
python -m http.server 8080
```

Depois, abra `http://localhost:8080`.

Para simular as duas pessoas no mesmo computador, use dois navegadores diferentes. Cada pessoa deve escolher um nome diferente e usar o mesmo código secreto.

## Publicar e instalar no iPhone

O iPhone precisa abrir o aplicativo por um endereço HTTPS. Hospede esta pasta em um serviço estático gratuito, como GitHub Pages, Cloudflare Pages ou Vercel.

Em cada iPhone:

1. Abra o endereço pelo Safari.
2. Toque em **Compartilhar**.
3. Escolha **Adicionar à Tela de Início**.
4. Ative **Abrir como App** e confirme.
5. Entre com um nome próprio e o mesmo código secreto nos dois aparelhos.

## Como usar a Jam

1. Uma pessoa abre **Jam** e toca em **Criar uma Jam**.
2. No outro iPhone, a sala aparecerá como disponível.
3. A segunda pessoa toca em **Entrar na Jam**.
4. A partir daí, play, pause, troca de música e avanço na faixa são enviados aos dois aparelhos.

O iOS exige uma interação da pessoa antes de liberar áudio automático. Por isso, cada aparelho precisa tocar em **Entrar na Jam** ou em **Reproduzir** ao menos uma vez. A sincronização corrige diferenças perceptíveis, mas depende da qualidade da internet e não é sincronização de estúdio.

## Adicionar músicas

O botão de upload funciona tanto no iPhone quanto no Windows:

- no iPhone, escolha um áudio salvo no app Arquivos;
- no Windows, abra o mesmo site e selecione um arquivo do computador;
- a capa é opcional;
- cada áudio pode ter até 100 MB;
- os arquivos permanecem privados e são reproduzidos por links temporários.

Envie somente músicas que vocês tenham autorização para armazenar e reproduzir.

## Importar um catálogo

No Windows, abra a seção **Biblioteca** e clique em **Importar**. Depois escolha uma das opções:

- **Escolher músicas** permite marcar vários arquivos manualmente;
- **Escolher uma pasta** procura os áudios existentes na pasta selecionada e nas subpastas.

O aplicativo analisa um arquivo por vez para não sobrecarregar o computador. Quando as informações estiverem gravadas dentro do áudio, ele identifica automaticamente o título, artista, álbum e capa. A duração é lida pelo navegador. Quando alguma informação não existir, o nome do arquivo e a organização das pastas são usados como alternativa.

Antes do envio, cada arquivo recebe uma identificação SHA-256. Arquivos que já existem na biblioteca ou que aparecem duas vezes na mesma seleção são marcados como repetidos e não são enviados novamente. Durante a importação, a tela informa quantas músicas foram concluídas. O botão **Parar importação** interrompe a fila depois do arquivo atual sem apagar o que já foi salvo.

Os formatos aceitos são MP3, M4A, AAC, WAV, OGG e FLAC. Para o melhor equilíbrio no iPhone, prefira M4A com AAC-LC em 256 kbps, 44,1 kHz e estéreo.

## Estrutura

```text
dois-tons/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── icons/
│   │   ├── apple-touch-icon.png
│   │   ├── icon-192.png
│   │   ├── icon-512.png
│   │   ├── icon-maskable-512.png
│   │   └── icon.svg
│   └── js/
│       ├── cloud-service.js
│       ├── script.js
│       └── supabase-config.js
├── supabase/
│   ├── catalog-import.sql
│   └── schema.sql
├── index.html
├── manifest.webmanifest
└── service-worker.js
```

## Observações de segurança

- O código secreto não é salvo no navegador e não aparece nas tabelas públicas.
- Todas as tabelas expostas usam Row Level Security.
- O bucket de áudio é privado.
- Cada consulta é limitada à sala associada à sessão do aparelho.
- O banco não permite uma terceira identidade.
- Se o Safari perder os dados do site, entre novamente usando exatamente o mesmo nome daquele aparelho e o código da sala.
- Como o login anônimo pode sofrer abuso em um endereço público, mantenha o link entre vocês. Para divulgar o endereço amplamente, adicione Cloudflare Turnstile antes do lançamento.

Sem as duas chaves públicas preenchidas, o aplicativo permanece em modo de demonstração e não envia nenhum dado para a nuvem.
