-- Importação do catálogo
-- Execute no SQL Editor depois do schema principal.

-- identificação de arquivos e prevenção de duplicatas
alter table public.tracks
add column if not exists file_hash text;

alter table public.tracks
add column if not exists file_size bigint not null default 0;

alter table public.tracks
add column if not exists mime_type text;

create unique index if not exists tracks_duo_file_hash_unique
on public.tracks (duo_id,file_hash)
where file_hash is not null and file_hash <> '';

-- formatos aceitos pelo armazenamento privado
update storage.buckets
set
    file_size_limit = 104857600,
    allowed_mime_types = array[
        'audio/mpeg',
        'audio/mp4',
        'audio/aac',
        'audio/x-m4a',
        'audio/wav',
        'audio/wave',
        'audio/x-wav',
        'audio/ogg',
        'audio/flac',
        'audio/x-flac',
        'video/mp4',
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'image/webp',
        'image/heic',
        'image/heif'
    ]
where id = 'media';

notify pgrst,'reload schema';
