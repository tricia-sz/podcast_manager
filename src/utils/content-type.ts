export enum ContentType {
  // JSON
  JSON = "application/json",
  JSON_API = "application/vnd.api+json",
  JSON_LD = "application/ld+json",

  // Texto
  TEXT = "text/plain",
  HTML = "text/html",
  CSS = "text/css",
  CSV = "text/csv",
  XML = "text/xml",

  // XML
  XML_APPLICATION = "application/xml",

  // Formulários
  FORM_URLENCODED = "application/x-www-form-urlencoded",
  FORM_DATA = "multipart/form-data",

  // Arquivos
  PDF = "application/pdf",
  ZIP = "application/zip",
  GZIP = "application/gzip",

  // Imagens
  JPEG = "image/jpeg",
  PNG = "image/png",
  GIF = "image/gif",
  WEBP = "image/webp",
  SVG = "image/svg+xml",
  ICO = "image/x-icon",

  // Áudio
  MP3 = "audio/mpeg",
  WAV = "audio/wav",
  OGG_AUDIO = "audio/ogg",

  // Vídeo
  MP4 = "video/mp4",
  WEBM = "video/webm",
  OGG_VIDEO = "video/ogg",

  // Outros
  OCTET_STREAM = "application/octet-stream",
}