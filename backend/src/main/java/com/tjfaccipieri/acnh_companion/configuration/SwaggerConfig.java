package com.tjfaccipieri.acnh_companion.configuration;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.responses.ApiResponse;
import io.swagger.v3.oas.models.responses.ApiResponses;
import org.springdoc.core.customizers.OpenApiCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {
  @Bean
  public OpenAPI springDesafioGenAPI() {
    return new OpenAPI().info(
            new Info().title("Rest API for ACNH companion website")
                .description("Rest API for ACNH companion website made with hours of code by Thiago Faccipieri")
                .version("v0.0.1")
                .license(new License()
                    .name("Thiago Faccipieri")
                    .url("https://github.com/tjfaccipieri"))
                .contact(new Contact()
                    .name("Thiago Faccipieri")
                    .url("https://linkedin.com/thiago-faccipieri")
                    .email("thiago.faccipieri@gmail.com")))
        .externalDocs(new ExternalDocumentation()
            .description("Github")
            .url("https://github.com/tjfaccipieri/")
        );
  }
  
  @Bean
  public OpenApiCustomizer customerGlobalHeaderOpenApiCustomiser() {
    
    return openApi -> {
      openApi.getPaths().values().forEach(pathItem -> pathItem.readOperations().forEach(operation -> {
        
        ApiResponses apiResponses = operation.getResponses();
        
        apiResponses.addApiResponse("200", createApiResponse("Sucesso!"));
        apiResponses.addApiResponse("201", createApiResponse("Objeto Persistido!"));
        apiResponses.addApiResponse("204", createApiResponse("Objeto Excluído!"));
        apiResponses.addApiResponse("400", createApiResponse("Erro na Requisição!"));
        apiResponses.addApiResponse("404", createApiResponse("Objeto Não Encontrado!"));
        apiResponses.addApiResponse("500", createApiResponse("Erro na Aplicação!"));
        
      }));
    };
  }
  
  private ApiResponse createApiResponse(String message) {
    
    return new ApiResponse().description(message);
    
  }
}