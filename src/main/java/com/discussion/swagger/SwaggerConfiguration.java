package com.discussion.swagger;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.google.common.base.Predicate;
import com.google.common.base.Predicates;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.UiConfiguration;

@Configuration
public class SwaggerConfiguration {

    @Bean
    public Docket productConfiguratorApi() {
        return new Docket(DocumentationType.SWAGGER_2).apiInfo(apiInfo())
                .useDefaultResponseMessages(false).select().paths(excludeBasicErrorController())
                .paths(excludeHealthController()).build();
    }

    @Bean
    public UiConfiguration uiConfig() {
        return UiConfiguration.DEFAULT;
    }

    public ApiInfo apiInfo() {
        return new ApiInfoBuilder().title("Discussion")
                .termsOfServiceUrl("Karim")
                .contact("Karim").build();
    }

    private Predicate<String> excludeBasicErrorController() {
        return Predicates.not(PathSelectors.regex("/error.*"));
    }

    private Predicate<String> excludeHealthController() {
        return Predicates.not(PathSelectors.regex("/health.*"));
    }
}
