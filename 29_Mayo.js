installed.packages("data.table")
install.packages("TM")
install.packages("CORFUS")
install.packages("wordcloud")



#Mandar a llamar
library(data.table)
library(wordcloud)
library(RColorBrewer)

#Data table
dt<-data.table(name="sebaas", "Romo" )
ar<-array(c( "jaun","pedro"))
class(dt)

#fechas
hoy<-Sys.Date()
class(hoy)

#hora
hora<-Sys.time()
class(hora)
#Fecha completa
Fecha<- as.Date("2025-24-05", format="%Y-%d-%m")

#Crear un vector
comentarios <-(c("Epic Games es una compañía estadounidense fundada en 1991 por el director ejecutivo Tim Sweeney. Su sede se encuentra en Cary, Carolina del Norte,
                 y cuenta con decenas de oficinas en todo el mundo.", "Epic gestiona Fortnite", "la televisión, retransmisiones, eventos en directo", " la arquitectura, la automoción",
                 "Mediante Fortnite, Unreal Engine, la Epic Games Store y Epic Online Services", "Epic ofrece un ecosistema digital integral", "Como política general, no ofrecemos visitas al estudio. ", 
                 "Como política general, no ofrecemos visitas al estudio. ", "Microsoft compró la propiedad intelectual de Gears of War a Epic Games", "Creamos nuestros juegos internamente con la ayuda de trabajadores independientes y equipos "
                 ))
#Para filtrar y buscar patrones
grepl("Epic", comentarios)
