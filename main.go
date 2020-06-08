package main

import (
	"github.com/gin-gonic/gin"
	"github.com/im6/vp3/config"
	"github.com/im6/vp3/store"
)

const port = ":8080"

func main() {
	r := gin.Default()

	config.InitTemplate(r)
	config.InitRoute(r)
	store.ConnectDataBase()

	r.Run(port)
}
