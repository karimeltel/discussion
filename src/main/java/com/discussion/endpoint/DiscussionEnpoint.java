package com.discussion.endpoint;

import java.util.Collection;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.discussion.domain.DiscussionEntity;
import com.discussion.service.DiscussionService;
import com.discussion.swagger.SwaggerDescriptions;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@Api("Operation for discussion")
@RestController
@RequestMapping("/discussion")
public class DiscussionEnpoint {

    
    private DiscussionService discussionService;

    @Autowired
    public DiscussionEnpoint(DiscussionService discussionService) {
        this.discussionService = discussionService;
    }
    
    @ApiOperation("Create a discussion")
    @ApiResponses({@ApiResponse(code = 200, message = SwaggerDescriptions.RESPONSE_CODE_200),
            @ApiResponse(code = 400, message = SwaggerDescriptions.RESPONSE_CODE_400),
            @ApiResponse(code = 403, message = SwaggerDescriptions.RESPONSE_CODE_403)})
    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public DiscussionEntity create(@RequestBody @Valid DiscussionEntity entity) throws Exception {
    	DiscussionEntity discussion = discussionService.create(entity);
        return discussion;
    }
    
    
    @ApiOperation("Find all discussions")
    @ApiResponses({@ApiResponse(code = 200, message = SwaggerDescriptions.RESPONSE_CODE_200),
            @ApiResponse(code = 400, message = SwaggerDescriptions.RESPONSE_CODE_400),
            @ApiResponse(code = 403, message = SwaggerDescriptions.RESPONSE_CODE_403),
            @ApiResponse(code = 404, message = SwaggerDescriptions.RESPONSE_CODE_404)})
    @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public Collection<DiscussionEntity> findAll() {
        Collection<DiscussionEntity> discussion = discussionService.findAll();
        return discussion;
    }
    
    @ApiOperation("Update a discussion")
    @ApiResponses({@ApiResponse(code = 200, message = SwaggerDescriptions.RESPONSE_CODE_200),
            @ApiResponse(code = 400, message = SwaggerDescriptions.RESPONSE_CODE_400),
            @ApiResponse(code = 403, message = SwaggerDescriptions.RESPONSE_CODE_403)})
    @RequestMapping(method = RequestMethod.PUT, value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public DiscussionEntity update(@RequestBody @Valid DiscussionEntity entity) throws Exception{
        return discussionService.update(entity);
    }

    @ApiOperation("Find a discussion by an Id")
    @ApiResponses({@ApiResponse(code = 200, message = SwaggerDescriptions.RESPONSE_CODE_200),
            @ApiResponse(code = 400, message = SwaggerDescriptions.RESPONSE_CODE_400),
            @ApiResponse(code = 403, message = SwaggerDescriptions.RESPONSE_CODE_403),
            @ApiResponse(code = 404, message = SwaggerDescriptions.RESPONSE_CODE_404)})
    @RequestMapping(value = "/{id}", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public DiscussionEntity findOne(@PathVariable Integer id)
            throws Exception {
    	DiscussionEntity vendor = discussionService.findById(id);
        return vendor;
    }

    @ApiOperation("Delete a discussion by an Id")
    @ApiResponses({@ApiResponse(code = 200, message = SwaggerDescriptions.RESPONSE_CODE_200),
            @ApiResponse(code = 400, message = SwaggerDescriptions.RESPONSE_CODE_400),
            @ApiResponse(code = 403, message = SwaggerDescriptions.RESPONSE_CODE_403),
            @ApiResponse(code = 404, message = SwaggerDescriptions.RESPONSE_CODE_404)})
    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public void delete(@PathVariable Integer id) throws Exception {
    	discussionService.deleteById(id);
    }
}
