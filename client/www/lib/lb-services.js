(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Checklist
 * @header lbServices.Checklist
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Checklist` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Checklist",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/checklists/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Checklist#createChangeStream
         * @methodOf lbServices.Checklist
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/checklists/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Checklist#getAll
         * @methodOf lbServices.Checklist
         *
         * @description
         *
         * Get all the latest versions of the entities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Checklist` object.)
         * </em>
         */
        "getAll": {
          isArray: false,
          url: urlBase + "/checklists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Checklist#getById
         * @methodOf lbServices.Checklist
         *
         * @description
         *
         * Get an entity by its id and version.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `version` – `{number=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Checklist` object.)
         * </em>
         */
        "getById": {
          url: urlBase + "/checklists/:entity/:version",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Checklist#getLatest
         * @methodOf lbServices.Checklist
         *
         * @description
         *
         * Get the latest version of the specified entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Checklist` object.)
         * </em>
         */
        "getLatest": {
          url: urlBase + "/checklists/:entity/latest",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Checklist#deleteLatestById
         * @methodOf lbServices.Checklist
         *
         * @description
         *
         * Delete an entity by its id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteLatestById": {
          url: urlBase + "/checklists/:entity/latest",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Checklist#putLatest
         * @methodOf lbServices.Checklist
         *
         * @description
         *
         * Create a new version of this entity
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `data` – `{object=}` - Model instance data
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Checklist` object.)
         * </em>
         */
        "putLatest": {
          url: urlBase + "/checklists/:entity/latest",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Checklist#updateLatest
         * @methodOf lbServices.Checklist
         *
         * @description
         *
         * Update this entity
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `data` – `{object=}` - Model instance data
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Checklist` object.)
         * </em>
         */
        "updateLatest": {
          url: urlBase + "/checklists/:entity/latest",
          method: "PATCH"
        },

        /**
         * @ngdoc method
         * @name lbServices.Checklist#createEntity
         * @methodOf lbServices.Checklist
         *
         * @description
         *
         * Create a new entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Checklist` object.)
         * </em>
         */
        "createEntity": {
          url: urlBase + "/checklists",
          method: "POST"
        },

        // INTERNAL. Use Work.checklist() instead.
        "::get::work::checklist": {
          url: urlBase + "/work/:id/checklist",
          method: "GET"
        },

        // INTERNAL. Use Work.checklist.create() instead.
        "::create::work::checklist": {
          url: urlBase + "/work/:id/checklist",
          method: "POST"
        },

        // INTERNAL. Use Work.checklist.update() instead.
        "::update::work::checklist": {
          url: urlBase + "/work/:id/checklist",
          method: "PUT"
        },

        // INTERNAL. Use Work.checklist.destroy() instead.
        "::destroy::work::checklist": {
          url: urlBase + "/work/:id/checklist",
          method: "DELETE"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Checklist#modelName
    * @propertyOf lbServices.Checklist
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Checklist`.
    */
    R.modelName = "Checklist";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Work
 * @header lbServices.Work
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Work` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Work",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/work/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Work.checklist() instead.
        "prototype$__get__checklist": {
          url: urlBase + "/work/:id/checklist",
          method: "GET"
        },

        // INTERNAL. Use Work.checklist.create() instead.
        "prototype$__create__checklist": {
          url: urlBase + "/work/:id/checklist",
          method: "POST"
        },

        // INTERNAL. Use Work.checklist.update() instead.
        "prototype$__update__checklist": {
          url: urlBase + "/work/:id/checklist",
          method: "PUT"
        },

        // INTERNAL. Use Work.checklist.destroy() instead.
        "prototype$__destroy__checklist": {
          url: urlBase + "/work/:id/checklist",
          method: "DELETE"
        },

        // INTERNAL. Use Work.team() instead.
        "prototype$__get__team": {
          url: urlBase + "/work/:id/team",
          method: "GET"
        },

        // INTERNAL. Use Work.team.create() instead.
        "prototype$__create__team": {
          url: urlBase + "/work/:id/team",
          method: "POST"
        },

        // INTERNAL. Use Work.team.update() instead.
        "prototype$__update__team": {
          url: urlBase + "/work/:id/team",
          method: "PUT"
        },

        // INTERNAL. Use Work.team.destroy() instead.
        "prototype$__destroy__team": {
          url: urlBase + "/work/:id/team",
          method: "DELETE"
        },

        // INTERNAL. Use Work.location() instead.
        "prototype$__get__location": {
          url: urlBase + "/work/:id/location",
          method: "GET"
        },

        // INTERNAL. Use Work.location.create() instead.
        "prototype$__create__location": {
          url: urlBase + "/work/:id/location",
          method: "POST"
        },

        // INTERNAL. Use Work.location.update() instead.
        "prototype$__update__location": {
          url: urlBase + "/work/:id/location",
          method: "PUT"
        },

        // INTERNAL. Use Work.location.destroy() instead.
        "prototype$__destroy__location": {
          url: urlBase + "/work/:id/location",
          method: "DELETE"
        },

        // INTERNAL. Use Work.schedule() instead.
        "prototype$__get__schedule": {
          url: urlBase + "/work/:id/schedule",
          method: "GET"
        },

        // INTERNAL. Use Work.schedule.create() instead.
        "prototype$__create__schedule": {
          url: urlBase + "/work/:id/schedule",
          method: "POST"
        },

        // INTERNAL. Use Work.schedule.update() instead.
        "prototype$__update__schedule": {
          url: urlBase + "/work/:id/schedule",
          method: "PUT"
        },

        // INTERNAL. Use Work.schedule.destroy() instead.
        "prototype$__destroy__schedule": {
          url: urlBase + "/work/:id/schedule",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Work#create
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Work` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/work",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Work#upsert
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Work` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/work",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Work#exists
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/work/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Work#findById
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Work` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/work/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Work#find
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Work` object.)
         * </em>
         */
        "find": {
          isArray: false,
          url: urlBase + "/work",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Work#findOne
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Work` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/work/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Work#updateAll
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/work/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Work#deleteById
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/work/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Work#count
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/work/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Work#prototype$updateAttributes
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Work` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/work/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Work#createChangeStream
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/work/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Work#getLocation
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Get the location this work is associated with
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `id` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Work` object.)
         * </em>
         */
        "getLocation": {
          url: urlBase + "/work/:id/location",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Work#getChecklist
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Get the checklist this work is associated with
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `id` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Work` object.)
         * </em>
         */
        "getChecklist": {
          url: urlBase + "/work/:id/checklist",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Work#getTeam
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Get the team this work is associated with
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `id` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Work` object.)
         * </em>
         */
        "getTeam": {
          url: urlBase + "/work/:id/team",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Work#getSchedule
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Get the schedule this work is associated with
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `id` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Work` object.)
         * </em>
         */
        "getSchedule": {
          url: urlBase + "/work/:id/schedule",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Work#updateOrCreate
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Work` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Work#update
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Work#destroyById
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Work#removeById
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Work#modelName
    * @propertyOf lbServices.Work
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Work`.
    */
    R.modelName = "Work";

    /**
     * @ngdoc object
     * @name lbServices.Work.checklist
     * @header lbServices.Work.checklist
     * @object
     * @description
     *
     * The object `Work.checklist` groups methods
     * manipulating `Checklist` instances related to `Work`.
     *
     * Call {@link lbServices.Work#checklist Work.checklist()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Work#checklist
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Fetches hasOne relation checklist.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Checklist` object.)
         * </em>
         */
        R.checklist = function() {
          var TargetResource = $injector.get("Checklist");
          var action = TargetResource["::get::work::checklist"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Work.checklist#create
         * @methodOf lbServices.Work.checklist
         *
         * @description
         *
         * Creates a new instance in checklist of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Checklist` object.)
         * </em>
         */
        R.checklist.create = function() {
          var TargetResource = $injector.get("Checklist");
          var action = TargetResource["::create::work::checklist"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Work.checklist#destroy
         * @methodOf lbServices.Work.checklist
         *
         * @description
         *
         * Deletes checklist of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.checklist.destroy = function() {
          var TargetResource = $injector.get("Checklist");
          var action = TargetResource["::destroy::work::checklist"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Work.checklist#update
         * @methodOf lbServices.Work.checklist
         *
         * @description
         *
         * Update checklist of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Checklist` object.)
         * </em>
         */
        R.checklist.update = function() {
          var TargetResource = $injector.get("Checklist");
          var action = TargetResource["::update::work::checklist"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Work.team
     * @header lbServices.Work.team
     * @object
     * @description
     *
     * The object `Work.team` groups methods
     * manipulating `Team` instances related to `Work`.
     *
     * Call {@link lbServices.Work#team Work.team()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Work#team
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Fetches hasOne relation team.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Team` object.)
         * </em>
         */
        R.team = function() {
          var TargetResource = $injector.get("Team");
          var action = TargetResource["::get::work::team"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Work.team#create
         * @methodOf lbServices.Work.team
         *
         * @description
         *
         * Creates a new instance in team of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Team` object.)
         * </em>
         */
        R.team.create = function() {
          var TargetResource = $injector.get("Team");
          var action = TargetResource["::create::work::team"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Work.team#destroy
         * @methodOf lbServices.Work.team
         *
         * @description
         *
         * Deletes team of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.team.destroy = function() {
          var TargetResource = $injector.get("Team");
          var action = TargetResource["::destroy::work::team"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Work.team#update
         * @methodOf lbServices.Work.team
         *
         * @description
         *
         * Update team of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Team` object.)
         * </em>
         */
        R.team.update = function() {
          var TargetResource = $injector.get("Team");
          var action = TargetResource["::update::work::team"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Work.location
     * @header lbServices.Work.location
     * @object
     * @description
     *
     * The object `Work.location` groups methods
     * manipulating `Location` instances related to `Work`.
     *
     * Call {@link lbServices.Work#location Work.location()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Work#location
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Fetches hasOne relation location.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.location = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::get::work::location"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Work.location#create
         * @methodOf lbServices.Work.location
         *
         * @description
         *
         * Creates a new instance in location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.location.create = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::create::work::location"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Work.location#destroy
         * @methodOf lbServices.Work.location
         *
         * @description
         *
         * Deletes location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.location.destroy = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::destroy::work::location"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Work.location#update
         * @methodOf lbServices.Work.location
         *
         * @description
         *
         * Update location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.location.update = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::update::work::location"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Work.schedule
     * @header lbServices.Work.schedule
     * @object
     * @description
     *
     * The object `Work.schedule` groups methods
     * manipulating `Schedule` instances related to `Work`.
     *
     * Call {@link lbServices.Work#schedule Work.schedule()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Work#schedule
         * @methodOf lbServices.Work
         *
         * @description
         *
         * Fetches hasOne relation schedule.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Schedule` object.)
         * </em>
         */
        R.schedule = function() {
          var TargetResource = $injector.get("Schedule");
          var action = TargetResource["::get::work::schedule"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Work.schedule#create
         * @methodOf lbServices.Work.schedule
         *
         * @description
         *
         * Creates a new instance in schedule of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Schedule` object.)
         * </em>
         */
        R.schedule.create = function() {
          var TargetResource = $injector.get("Schedule");
          var action = TargetResource["::create::work::schedule"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Work.schedule#destroy
         * @methodOf lbServices.Work.schedule
         *
         * @description
         *
         * Deletes schedule of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.schedule.destroy = function() {
          var TargetResource = $injector.get("Schedule");
          var action = TargetResource["::destroy::work::schedule"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Work.schedule#update
         * @methodOf lbServices.Work.schedule
         *
         * @description
         *
         * Update schedule of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Schedule` object.)
         * </em>
         */
        R.schedule.update = function() {
          var TargetResource = $injector.get("Schedule");
          var action = TargetResource["::update::work::schedule"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Job
 * @header lbServices.Job
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Job` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Job",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/jobs/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Job#create
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Job` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/jobs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Job#upsert
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Job` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/jobs",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Job#exists
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/jobs/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Job#findById
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Job` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/jobs/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Job#find
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Job` object.)
         * </em>
         */
        "find": {
          isArray: false,
          url: urlBase + "/jobs",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Job#findOne
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Job` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/jobs/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Job#updateAll
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/jobs/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Job#deleteById
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/jobs/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Job#count
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/jobs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Job#prototype$updateAttributes
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Job` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/jobs/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Job#createChangeStream
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/jobs/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Job#team
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Fetches belongsTo relation parent.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Job` object.)
         * </em>
         */
        "team": {
          url: urlBase + "/jobs/:entity/team",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Job#schedule
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Fetches belongsTo relation schedule.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Job` object.)
         * </em>
         */
        "schedule": {
          url: urlBase + "/jobs/:entity/schedule",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Job#location
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Fetches belongsTo relation location.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Job` object.)
         * </em>
         */
        "location": {
          url: urlBase + "/jobs/:entity/location",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Job#checklist
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Fetches belongsTo relation checklist.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Job` object.)
         * </em>
         */
        "checklist": {
          url: urlBase + "/jobs/:entity/checklist",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Job#updateOrCreate
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Job` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Job#update
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Job#destroyById
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Job#removeById
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Job#modelName
    * @propertyOf lbServices.Job
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Job`.
    */
    R.modelName = "Job";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Team
 * @header lbServices.Team
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Team` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Team",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/teams/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Team.operators.findById() instead.
        "prototype$__findById__operators": {
          url: urlBase + "/teams/:id/operators/:fk",
          method: "GET"
        },

        // INTERNAL. Use Team.operators.destroyById() instead.
        "prototype$__destroyById__operators": {
          url: urlBase + "/teams/:id/operators/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Team.operators.updateById() instead.
        "prototype$__updateById__operators": {
          url: urlBase + "/teams/:id/operators/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Team.supervisors.findById() instead.
        "prototype$__findById__supervisors": {
          url: urlBase + "/teams/:id/supervisors/:fk",
          method: "GET"
        },

        // INTERNAL. Use Team.supervisors.destroyById() instead.
        "prototype$__destroyById__supervisors": {
          url: urlBase + "/teams/:id/supervisors/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Team.supervisors.updateById() instead.
        "prototype$__updateById__supervisors": {
          url: urlBase + "/teams/:id/supervisors/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Team.members.findById() instead.
        "prototype$__findById__members": {
          url: urlBase + "/teams/:id/members/:fk",
          method: "GET"
        },

        // INTERNAL. Use Team.members.destroyById() instead.
        "prototype$__destroyById__members": {
          url: urlBase + "/teams/:id/members/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Team.members.updateById() instead.
        "prototype$__updateById__members": {
          url: urlBase + "/teams/:id/members/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Team.operators() instead.
        "prototype$__get__operators": {
          isArray: false,
          url: urlBase + "/teams/:id/operators",
          method: "GET"
        },

        // INTERNAL. Use Team.operators.create() instead.
        "prototype$__create__operators": {
          url: urlBase + "/teams/:id/operators",
          method: "POST"
        },

        // INTERNAL. Use Team.operators.destroyAll() instead.
        "prototype$__delete__operators": {
          url: urlBase + "/teams/:id/operators",
          method: "DELETE"
        },

        // INTERNAL. Use Team.operators.count() instead.
        "prototype$__count__operators": {
          url: urlBase + "/teams/:id/operators/count",
          method: "GET"
        },

        // INTERNAL. Use Team.supervisors() instead.
        "prototype$__get__supervisors": {
          isArray: false,
          url: urlBase + "/teams/:id/supervisors",
          method: "GET"
        },

        // INTERNAL. Use Team.supervisors.create() instead.
        "prototype$__create__supervisors": {
          url: urlBase + "/teams/:id/supervisors",
          method: "POST"
        },

        // INTERNAL. Use Team.supervisors.destroyAll() instead.
        "prototype$__delete__supervisors": {
          url: urlBase + "/teams/:id/supervisors",
          method: "DELETE"
        },

        // INTERNAL. Use Team.supervisors.count() instead.
        "prototype$__count__supervisors": {
          url: urlBase + "/teams/:id/supervisors/count",
          method: "GET"
        },

        // INTERNAL. Use Team.members() instead.
        "prototype$__get__members": {
          isArray: false,
          url: urlBase + "/teams/:id/members",
          method: "GET"
        },

        // INTERNAL. Use Team.members.create() instead.
        "prototype$__create__members": {
          url: urlBase + "/teams/:id/members",
          method: "POST"
        },

        // INTERNAL. Use Team.members.destroyAll() instead.
        "prototype$__delete__members": {
          url: urlBase + "/teams/:id/members",
          method: "DELETE"
        },

        // INTERNAL. Use Team.members.count() instead.
        "prototype$__count__members": {
          url: urlBase + "/teams/:id/members/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#createChangeStream
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/teams/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#getAll
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Get all the latest versions of the entities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Team` object.)
         * </em>
         */
        "getAll": {
          isArray: false,
          url: urlBase + "/teams",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#getById
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Get an entity by its id and version.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `version` – `{number=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Team` object.)
         * </em>
         */
        "getById": {
          url: urlBase + "/teams/:entity/:version",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#getLatest
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Get the latest version of the specified entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Team` object.)
         * </em>
         */
        "getLatest": {
          url: urlBase + "/teams/:entity/latest",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#deleteLatestById
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Delete an entity by its id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteLatestById": {
          url: urlBase + "/teams/:entity/latest",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#putLatest
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Create a new version of this entity
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `data` – `{object=}` - Model instance data
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Team` object.)
         * </em>
         */
        "putLatest": {
          url: urlBase + "/teams/:entity/latest",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#updateLatest
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Update this entity
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `data` – `{object=}` - Model instance data
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Team` object.)
         * </em>
         */
        "updateLatest": {
          url: urlBase + "/teams/:entity/latest",
          method: "PATCH"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#createEntity
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Create a new entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Team` object.)
         * </em>
         */
        "createEntity": {
          url: urlBase + "/teams",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#getOperators
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Fetches hasMany relation operators.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `version` – `{number=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Team` object.)
         * </em>
         */
        "getOperators": {
          isArray: false,
          url: urlBase + "/teams/:entity/:version/operators",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#putOperators
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Add a new entity to the relation operators.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `fk` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "putOperators": {
          url: urlBase + "/teams/:entity/latest/operators/rel/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#deleteOperators
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Remove an entity from the relation operators.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `fk` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteOperators": {
          url: urlBase + "/teams/:entity/latest/operators/rel/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#getSupervisors
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Fetches hasMany relation supervisors.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `version` – `{number=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Team` object.)
         * </em>
         */
        "getSupervisors": {
          isArray: false,
          url: urlBase + "/teams/:entity/:version/supervisors",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#putSupervisors
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Add a new entity to the relation supervisors.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `fk` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "putSupervisors": {
          url: urlBase + "/teams/:entity/latest/supervisors/rel/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#deleteSupervisors
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Remove an entity from the relation supervisors.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `fk` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteSupervisors": {
          url: urlBase + "/teams/:entity/latest/supervisors/rel/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Team#getMembers
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Get the members of this team (operators and supervisors, without duplicates).
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `id` – `{string=}` - 
         *
         *  - `version` – `{number=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Team` object.)
         * </em>
         */
        "getMembers": {
          isArray: false,
          url: urlBase + "/teams/:id/:version/members",
          method: "GET"
        },

        // INTERNAL. Use Work.team() instead.
        "::get::work::team": {
          url: urlBase + "/work/:id/team",
          method: "GET"
        },

        // INTERNAL. Use Work.team.create() instead.
        "::create::work::team": {
          url: urlBase + "/work/:id/team",
          method: "POST"
        },

        // INTERNAL. Use Work.team.update() instead.
        "::update::work::team": {
          url: urlBase + "/work/:id/team",
          method: "PUT"
        },

        // INTERNAL. Use Work.team.destroy() instead.
        "::destroy::work::team": {
          url: urlBase + "/work/:id/team",
          method: "DELETE"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Team#modelName
    * @propertyOf lbServices.Team
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Team`.
    */
    R.modelName = "Team";

    /**
     * @ngdoc object
     * @name lbServices.Team.operators
     * @header lbServices.Team.operators
     * @object
     * @description
     *
     * The object `Team.operators` groups methods
     * manipulating `User` instances related to `Team`.
     *
     * Call {@link lbServices.Team#operators Team.operators()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Team#operators
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Queries operators of team.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - VersionedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.operators = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::team::operators"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Team.operators#count
         * @methodOf lbServices.Team.operators
         *
         * @description
         *
         * Counts operators of team.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - VersionedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.operators.count = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::count::team::operators"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Team.operators#create
         * @methodOf lbServices.Team.operators
         *
         * @description
         *
         * Creates a new instance in operators of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - VersionedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.operators.create = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::create::team::operators"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Team.operators#destroyAll
         * @methodOf lbServices.Team.operators
         *
         * @description
         *
         * Deletes all operators of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - VersionedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.operators.destroyAll = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::delete::team::operators"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Team.operators#destroyById
         * @methodOf lbServices.Team.operators
         *
         * @description
         *
         * Delete a related item by id for operators.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - VersionedModel id
         *
         *  - `fk` – `{*}` - Foreign key for operators
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.operators.destroyById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::destroyById::team::operators"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Team.operators#findById
         * @methodOf lbServices.Team.operators
         *
         * @description
         *
         * Find a related item by id for operators.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - VersionedModel id
         *
         *  - `fk` – `{*}` - Foreign key for operators
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.operators.findById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::findById::team::operators"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Team.operators#updateById
         * @methodOf lbServices.Team.operators
         *
         * @description
         *
         * Update a related item by id for operators.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - VersionedModel id
         *
         *  - `fk` – `{*}` - Foreign key for operators
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.operators.updateById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::updateById::team::operators"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Team.supervisors
     * @header lbServices.Team.supervisors
     * @object
     * @description
     *
     * The object `Team.supervisors` groups methods
     * manipulating `User` instances related to `Team`.
     *
     * Call {@link lbServices.Team#supervisors Team.supervisors()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Team#supervisors
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Queries supervisors of team.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - VersionedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.supervisors = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::team::supervisors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Team.supervisors#count
         * @methodOf lbServices.Team.supervisors
         *
         * @description
         *
         * Counts supervisors of team.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - VersionedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.supervisors.count = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::count::team::supervisors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Team.supervisors#create
         * @methodOf lbServices.Team.supervisors
         *
         * @description
         *
         * Creates a new instance in supervisors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - VersionedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.supervisors.create = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::create::team::supervisors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Team.supervisors#destroyAll
         * @methodOf lbServices.Team.supervisors
         *
         * @description
         *
         * Deletes all supervisors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - VersionedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.supervisors.destroyAll = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::delete::team::supervisors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Team.supervisors#destroyById
         * @methodOf lbServices.Team.supervisors
         *
         * @description
         *
         * Delete a related item by id for supervisors.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - VersionedModel id
         *
         *  - `fk` – `{*}` - Foreign key for supervisors
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.supervisors.destroyById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::destroyById::team::supervisors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Team.supervisors#findById
         * @methodOf lbServices.Team.supervisors
         *
         * @description
         *
         * Find a related item by id for supervisors.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - VersionedModel id
         *
         *  - `fk` – `{*}` - Foreign key for supervisors
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.supervisors.findById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::findById::team::supervisors"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Team.supervisors#updateById
         * @methodOf lbServices.Team.supervisors
         *
         * @description
         *
         * Update a related item by id for supervisors.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - VersionedModel id
         *
         *  - `fk` – `{*}` - Foreign key for supervisors
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.supervisors.updateById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::updateById::team::supervisors"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Team.members
     * @header lbServices.Team.members
     * @object
     * @description
     *
     * The object `Team.members` groups methods
     * manipulating `User` instances related to `Team`.
     *
     * Call {@link lbServices.Team#members Team.members()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Team#members
         * @methodOf lbServices.Team
         *
         * @description
         *
         * Queries members of team.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - VersionedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.members = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::team::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Team.members#count
         * @methodOf lbServices.Team.members
         *
         * @description
         *
         * Counts members of team.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - VersionedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.members.count = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::count::team::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Team.members#create
         * @methodOf lbServices.Team.members
         *
         * @description
         *
         * Creates a new instance in members of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - VersionedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.members.create = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::create::team::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Team.members#destroyAll
         * @methodOf lbServices.Team.members
         *
         * @description
         *
         * Deletes all members of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - VersionedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.members.destroyAll = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::delete::team::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Team.members#destroyById
         * @methodOf lbServices.Team.members
         *
         * @description
         *
         * Delete a related item by id for members.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - VersionedModel id
         *
         *  - `fk` – `{*}` - Foreign key for members
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.members.destroyById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::destroyById::team::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Team.members#findById
         * @methodOf lbServices.Team.members
         *
         * @description
         *
         * Find a related item by id for members.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - VersionedModel id
         *
         *  - `fk` – `{*}` - Foreign key for members
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.members.findById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::findById::team::members"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Team.members#updateById
         * @methodOf lbServices.Team.members
         *
         * @description
         *
         * Update a related item by id for members.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - VersionedModel id
         *
         *  - `fk` – `{*}` - Foreign key for members
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.members.updateById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::updateById::team::members"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Location
 * @header lbServices.Location
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Location` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Location",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/locations/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Location#createChangeStream
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/locations/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#getAll
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Get all the latest versions of the entities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "getAll": {
          isArray: false,
          url: urlBase + "/locations",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#getById
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Get an entity by its id and version.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `version` – `{number=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "getById": {
          url: urlBase + "/locations/:entity/:version",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#getLatest
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Get the latest version of the specified entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "getLatest": {
          url: urlBase + "/locations/:entity/latest",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#deleteLatestById
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Delete an entity by its id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteLatestById": {
          url: urlBase + "/locations/:entity/latest",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#putLatest
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Create a new version of this entity
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `data` – `{object=}` - Model instance data
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "putLatest": {
          url: urlBase + "/locations/:entity/latest",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#updateLatest
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Update this entity
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `data` – `{object=}` - Model instance data
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "updateLatest": {
          url: urlBase + "/locations/:entity/latest",
          method: "PATCH"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#createEntity
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Create a new entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "createEntity": {
          url: urlBase + "/locations",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#parent
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Fetches belongsTo relation parent.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `version` – `{number=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "parent": {
          url: urlBase + "/locations/:entity/:version/parent",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#children
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Fetches belongsTo relation children.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `version` – `{number=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "children": {
          isArray: false,
          url: urlBase + "/locations/:entity/:version/children",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#getHandhelds
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Fetches hasMany relation handhelds.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `version` – `{number=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "getHandhelds": {
          isArray: false,
          url: urlBase + "/locations/:entity/:version/handhelds",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#putHandhelds
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Add a new entity to the relation handhelds.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `fk` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "putHandhelds": {
          url: urlBase + "/locations/:entity/latest/handhelds/rel/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#deleteHandhelds
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Remove an entity from the relation handhelds.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `fk` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteHandhelds": {
          url: urlBase + "/locations/:entity/latest/handhelds/rel/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#getAdministrators
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Fetches hasMany relation administrators.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `version` – `{number=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "getAdministrators": {
          isArray: false,
          url: urlBase + "/locations/:entity/:version/administrators",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#putAdministrators
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Add a new entity to the relation administrators.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `fk` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "putAdministrators": {
          url: urlBase + "/locations/:entity/latest/administrators/rel/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#deleteAdministrators
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Remove an entity from the relation administrators.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `fk` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteAdministrators": {
          url: urlBase + "/locations/:entity/latest/administrators/rel/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#getSafetyManagers
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Fetches hasMany relation safetyManagers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `version` – `{number=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        "getSafetyManagers": {
          isArray: false,
          url: urlBase + "/locations/:entity/:version/safetyManagers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#putSafetyManagers
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Add a new entity to the relation safetyManagers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `fk` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "putSafetyManagers": {
          url: urlBase + "/locations/:entity/latest/safetyManagers/rel/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Location#deleteSafetyManagers
         * @methodOf lbServices.Location
         *
         * @description
         *
         * Remove an entity from the relation safetyManagers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `fk` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteSafetyManagers": {
          url: urlBase + "/locations/:entity/latest/safetyManagers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Work.location() instead.
        "::get::work::location": {
          url: urlBase + "/work/:id/location",
          method: "GET"
        },

        // INTERNAL. Use Work.location.create() instead.
        "::create::work::location": {
          url: urlBase + "/work/:id/location",
          method: "POST"
        },

        // INTERNAL. Use Work.location.update() instead.
        "::update::work::location": {
          url: urlBase + "/work/:id/location",
          method: "PUT"
        },

        // INTERNAL. Use Work.location.destroy() instead.
        "::destroy::work::location": {
          url: urlBase + "/work/:id/location",
          method: "DELETE"
        },

        // INTERNAL. Use Handheld.location() instead.
        "::get::handheld::location": {
          url: urlBase + "/handhelds/:id/location",
          method: "GET"
        },

        // INTERNAL. Use Handheld.location.create() instead.
        "::create::handheld::location": {
          url: urlBase + "/handhelds/:id/location",
          method: "POST"
        },

        // INTERNAL. Use Handheld.location.update() instead.
        "::update::handheld::location": {
          url: urlBase + "/handhelds/:id/location",
          method: "PUT"
        },

        // INTERNAL. Use Handheld.location.destroy() instead.
        "::destroy::handheld::location": {
          url: urlBase + "/handhelds/:id/location",
          method: "DELETE"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Location#modelName
    * @propertyOf lbServices.Location
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Location`.
    */
    R.modelName = "Location";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CheckitAccessToken
 * @header lbServices.CheckitAccessToken
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CheckitAccessToken` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CheckitAccessToken",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/accessTokens/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use CheckitAccessToken.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/accessTokens/:id/user",
          method: "GET"
        },

        // INTERNAL. Use CheckitAccessToken.handheld() instead.
        "prototype$__get__handheld": {
          url: urlBase + "/accessTokens/:id/handheld",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CheckitAccessToken#create
         * @methodOf lbServices.CheckitAccessToken
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CheckitAccessToken` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CheckitAccessToken#upsert
         * @methodOf lbServices.CheckitAccessToken
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CheckitAccessToken` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/accessTokens",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CheckitAccessToken#exists
         * @methodOf lbServices.CheckitAccessToken
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/accessTokens/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CheckitAccessToken#findById
         * @methodOf lbServices.CheckitAccessToken
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CheckitAccessToken` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/accessTokens/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CheckitAccessToken#find
         * @methodOf lbServices.CheckitAccessToken
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CheckitAccessToken` object.)
         * </em>
         */
        "find": {
          isArray: false,
          url: urlBase + "/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CheckitAccessToken#findOne
         * @methodOf lbServices.CheckitAccessToken
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CheckitAccessToken` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/accessTokens/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CheckitAccessToken#updateAll
         * @methodOf lbServices.CheckitAccessToken
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/accessTokens/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.CheckitAccessToken#deleteById
         * @methodOf lbServices.CheckitAccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/accessTokens/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.CheckitAccessToken#count
         * @methodOf lbServices.CheckitAccessToken
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.CheckitAccessToken#prototype$updateAttributes
         * @methodOf lbServices.CheckitAccessToken
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - AccessToken id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CheckitAccessToken` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/accessTokens/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.CheckitAccessToken#createChangeStream
         * @methodOf lbServices.CheckitAccessToken
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/accessTokens/change-stream",
          method: "POST"
        },

        // INTERNAL. Use User.accessTokens.findById() instead.
        "::findById::user::accessTokens": {
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.accessTokens.destroyById() instead.
        "::destroyById::user::accessTokens": {
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.accessTokens.updateById() instead.
        "::updateById::user::accessTokens": {
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.accessTokens() instead.
        "::get::user::accessTokens": {
          isArray: false,
          url: urlBase + "/users/:id/accessTokens",
          method: "GET"
        },

        // INTERNAL. Use User.accessTokens.create() instead.
        "::create::user::accessTokens": {
          url: urlBase + "/users/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use User.accessTokens.destroyAll() instead.
        "::delete::user::accessTokens": {
          url: urlBase + "/users/:id/accessTokens",
          method: "DELETE"
        },

        // INTERNAL. Use User.accessTokens.count() instead.
        "::count::user::accessTokens": {
          url: urlBase + "/users/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Handheld.accessTokens.findById() instead.
        "::findById::handheld::accessTokens": {
          url: urlBase + "/handhelds/:id/accessTokens/:fk",
          method: "GET"
        },

        // INTERNAL. Use Handheld.accessTokens.destroyById() instead.
        "::destroyById::handheld::accessTokens": {
          url: urlBase + "/handhelds/:id/accessTokens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Handheld.accessTokens.updateById() instead.
        "::updateById::handheld::accessTokens": {
          url: urlBase + "/handhelds/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Handheld.accessTokens() instead.
        "::get::handheld::accessTokens": {
          isArray: false,
          url: urlBase + "/handhelds/:id/accessTokens",
          method: "GET"
        },

        // INTERNAL. Use Handheld.accessTokens.create() instead.
        "::create::handheld::accessTokens": {
          url: urlBase + "/handhelds/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use Handheld.accessTokens.destroyAll() instead.
        "::delete::handheld::accessTokens": {
          url: urlBase + "/handhelds/:id/accessTokens",
          method: "DELETE"
        },

        // INTERNAL. Use Handheld.accessTokens.count() instead.
        "::count::handheld::accessTokens": {
          url: urlBase + "/handhelds/:id/accessTokens/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CheckitAccessToken#updateOrCreate
         * @methodOf lbServices.CheckitAccessToken
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CheckitAccessToken` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CheckitAccessToken#update
         * @methodOf lbServices.CheckitAccessToken
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CheckitAccessToken#destroyById
         * @methodOf lbServices.CheckitAccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CheckitAccessToken#removeById
         * @methodOf lbServices.CheckitAccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CheckitAccessToken#modelName
    * @propertyOf lbServices.CheckitAccessToken
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CheckitAccessToken`.
    */
    R.modelName = "CheckitAccessToken";


        /**
         * @ngdoc method
         * @name lbServices.CheckitAccessToken#user
         * @methodOf lbServices.CheckitAccessToken
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - AccessToken id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::checkitAccessToken::user"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CheckitAccessToken#handheld
         * @methodOf lbServices.CheckitAccessToken
         *
         * @description
         *
         * Fetches belongsTo relation handheld.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - AccessToken id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Handheld` object.)
         * </em>
         */
        R.handheld = function() {
          var TargetResource = $injector.get("Handheld");
          var action = TargetResource["::get::checkitAccessToken::handheld"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/users/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use User.accessTokens.findById() instead.
        "prototype$__findById__accessTokens": {
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "GET"
        },

        // INTERNAL. Use User.accessTokens.destroyById() instead.
        "prototype$__destroyById__accessTokens": {
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use User.accessTokens.updateById() instead.
        "prototype$__updateById__accessTokens": {
          url: urlBase + "/users/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__identities
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for identities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for identities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__identities": {
          url: urlBase + "/users/:id/identities/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__identities
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for identities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for identities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__identities": {
          url: urlBase + "/users/:id/identities/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__identities
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for identities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for identities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__identities": {
          url: urlBase + "/users/:id/identities/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__credentials
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for credentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for credentials
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__credentials": {
          url: urlBase + "/users/:id/credentials/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__credentials
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for credentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for credentials
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__credentials": {
          url: urlBase + "/users/:id/credentials/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__credentials
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for credentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for credentials
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__credentials": {
          url: urlBase + "/users/:id/credentials/:fk",
          method: "PUT"
        },

        // INTERNAL. Use User.accessTokens() instead.
        "prototype$__get__accessTokens": {
          isArray: false,
          url: urlBase + "/users/:id/accessTokens",
          method: "GET"
        },

        // INTERNAL. Use User.accessTokens.create() instead.
        "prototype$__create__accessTokens": {
          url: urlBase + "/users/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use User.accessTokens.destroyAll() instead.
        "prototype$__delete__accessTokens": {
          url: urlBase + "/users/:id/accessTokens",
          method: "DELETE"
        },

        // INTERNAL. Use User.accessTokens.count() instead.
        "prototype$__count__accessTokens": {
          url: urlBase + "/users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__identities
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries identities of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__identities": {
          isArray: false,
          url: urlBase + "/users/:id/identities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__identities
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in identities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__identities": {
          url: urlBase + "/users/:id/identities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__identities
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all identities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__identities": {
          url: urlBase + "/users/:id/identities",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__identities
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts identities of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__identities": {
          url: urlBase + "/users/:id/identities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__credentials
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries credentials of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__credentials": {
          isArray: false,
          url: urlBase + "/users/:id/credentials",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__credentials
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in credentials of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__credentials": {
          url: urlBase + "/users/:id/credentials",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__credentials
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all credentials of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__credentials": {
          url: urlBase + "/users/:id/credentials",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__credentials
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts credentials of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__credentials": {
          url: urlBase + "/users/:id/credentials/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: false,
          url: urlBase + "/users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getMe
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get the current user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "getMe": {
          url: urlBase + "/users/me",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getSafetyManages
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get the locations this user is the safety manager for.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `id` – `{string=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "getSafetyManages": {
          isArray: false,
          url: urlBase + "/users/:id/safetyManages",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getAdministrates
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get the locations this user is the administrator for.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `id` – `{string=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "getAdministrates": {
          isArray: false,
          url: urlBase + "/users/:id/administrates",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getOperatesIn
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get the teams this user is an operator in.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `id` – `{string=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "getOperatesIn": {
          isArray: false,
          url: urlBase + "/users/:id/operatesIn",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getSupervises
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get the teams this user is a supervisor of.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `id` – `{string=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "getSupervises": {
          isArray: false,
          url: urlBase + "/users/:id/supervises",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getTeams
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get the teams this user is a supervisor or an operator in.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `id` – `{string=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "getTeams": {
          isArray: false,
          url: urlBase + "/users/:id/teams",
          method: "GET"
        },

        // INTERNAL. Use Team.operators.findById() instead.
        "::findById::team::operators": {
          url: urlBase + "/teams/:id/operators/:fk",
          method: "GET"
        },

        // INTERNAL. Use Team.operators.destroyById() instead.
        "::destroyById::team::operators": {
          url: urlBase + "/teams/:id/operators/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Team.operators.updateById() instead.
        "::updateById::team::operators": {
          url: urlBase + "/teams/:id/operators/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Team.supervisors.findById() instead.
        "::findById::team::supervisors": {
          url: urlBase + "/teams/:id/supervisors/:fk",
          method: "GET"
        },

        // INTERNAL. Use Team.supervisors.destroyById() instead.
        "::destroyById::team::supervisors": {
          url: urlBase + "/teams/:id/supervisors/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Team.supervisors.updateById() instead.
        "::updateById::team::supervisors": {
          url: urlBase + "/teams/:id/supervisors/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Team.members.findById() instead.
        "::findById::team::members": {
          url: urlBase + "/teams/:id/members/:fk",
          method: "GET"
        },

        // INTERNAL. Use Team.members.destroyById() instead.
        "::destroyById::team::members": {
          url: urlBase + "/teams/:id/members/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Team.members.updateById() instead.
        "::updateById::team::members": {
          url: urlBase + "/teams/:id/members/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Team.operators() instead.
        "::get::team::operators": {
          isArray: false,
          url: urlBase + "/teams/:id/operators",
          method: "GET"
        },

        // INTERNAL. Use Team.operators.create() instead.
        "::create::team::operators": {
          url: urlBase + "/teams/:id/operators",
          method: "POST"
        },

        // INTERNAL. Use Team.operators.destroyAll() instead.
        "::delete::team::operators": {
          url: urlBase + "/teams/:id/operators",
          method: "DELETE"
        },

        // INTERNAL. Use Team.operators.count() instead.
        "::count::team::operators": {
          url: urlBase + "/teams/:id/operators/count",
          method: "GET"
        },

        // INTERNAL. Use Team.supervisors() instead.
        "::get::team::supervisors": {
          isArray: false,
          url: urlBase + "/teams/:id/supervisors",
          method: "GET"
        },

        // INTERNAL. Use Team.supervisors.create() instead.
        "::create::team::supervisors": {
          url: urlBase + "/teams/:id/supervisors",
          method: "POST"
        },

        // INTERNAL. Use Team.supervisors.destroyAll() instead.
        "::delete::team::supervisors": {
          url: urlBase + "/teams/:id/supervisors",
          method: "DELETE"
        },

        // INTERNAL. Use Team.supervisors.count() instead.
        "::count::team::supervisors": {
          url: urlBase + "/teams/:id/supervisors/count",
          method: "GET"
        },

        // INTERNAL. Use Team.members() instead.
        "::get::team::members": {
          isArray: false,
          url: urlBase + "/teams/:id/members",
          method: "GET"
        },

        // INTERNAL. Use Team.members.create() instead.
        "::create::team::members": {
          url: urlBase + "/teams/:id/members",
          method: "POST"
        },

        // INTERNAL. Use Team.members.destroyAll() instead.
        "::delete::team::members": {
          url: urlBase + "/teams/:id/members",
          method: "DELETE"
        },

        // INTERNAL. Use Team.members.count() instead.
        "::count::team::members": {
          url: urlBase + "/teams/:id/members/count",
          method: "GET"
        },

        // INTERNAL. Use CheckitAccessToken.user() instead.
        "::get::checkitAccessToken::user": {
          url: urlBase + "/accessTokens/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";

    /**
     * @ngdoc object
     * @name lbServices.User.accessTokens
     * @header lbServices.User.accessTokens
     * @object
     * @description
     *
     * The object `User.accessTokens` groups methods
     * manipulating `CheckitAccessToken` instances related to `User`.
     *
     * Call {@link lbServices.User#accessTokens User.accessTokens()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.User#accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CheckitAccessToken` object.)
         * </em>
         */
        R.accessTokens = function() {
          var TargetResource = $injector.get("CheckitAccessToken");
          var action = TargetResource["::get::user::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.accessTokens#count
         * @methodOf lbServices.User.accessTokens
         *
         * @description
         *
         * Counts accessTokens of user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.accessTokens.count = function() {
          var TargetResource = $injector.get("CheckitAccessToken");
          var action = TargetResource["::count::user::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.accessTokens#create
         * @methodOf lbServices.User.accessTokens
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CheckitAccessToken` object.)
         * </em>
         */
        R.accessTokens.create = function() {
          var TargetResource = $injector.get("CheckitAccessToken");
          var action = TargetResource["::create::user::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.accessTokens#destroyAll
         * @methodOf lbServices.User.accessTokens
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessTokens.destroyAll = function() {
          var TargetResource = $injector.get("CheckitAccessToken");
          var action = TargetResource["::delete::user::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.accessTokens#destroyById
         * @methodOf lbServices.User.accessTokens
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessTokens.destroyById = function() {
          var TargetResource = $injector.get("CheckitAccessToken");
          var action = TargetResource["::destroyById::user::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.accessTokens#findById
         * @methodOf lbServices.User.accessTokens
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CheckitAccessToken` object.)
         * </em>
         */
        R.accessTokens.findById = function() {
          var TargetResource = $injector.get("CheckitAccessToken");
          var action = TargetResource["::findById::user::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.User.accessTokens#updateById
         * @methodOf lbServices.User.accessTokens
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CheckitAccessToken` object.)
         * </em>
         */
        R.accessTokens.updateById = function() {
          var TargetResource = $injector.get("CheckitAccessToken");
          var action = TargetResource["::updateById::user::accessTokens"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Handheld
 * @header lbServices.Handheld
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Handheld` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Handheld",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/handhelds/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Handheld.accessTokens.findById() instead.
        "prototype$__findById__accessTokens": {
          url: urlBase + "/handhelds/:id/accessTokens/:fk",
          method: "GET"
        },

        // INTERNAL. Use Handheld.accessTokens.destroyById() instead.
        "prototype$__destroyById__accessTokens": {
          url: urlBase + "/handhelds/:id/accessTokens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Handheld.accessTokens.updateById() instead.
        "prototype$__updateById__accessTokens": {
          url: urlBase + "/handhelds/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Handheld.location() instead.
        "prototype$__get__location": {
          url: urlBase + "/handhelds/:id/location",
          method: "GET"
        },

        // INTERNAL. Use Handheld.location.create() instead.
        "prototype$__create__location": {
          url: urlBase + "/handhelds/:id/location",
          method: "POST"
        },

        // INTERNAL. Use Handheld.location.update() instead.
        "prototype$__update__location": {
          url: urlBase + "/handhelds/:id/location",
          method: "PUT"
        },

        // INTERNAL. Use Handheld.location.destroy() instead.
        "prototype$__destroy__location": {
          url: urlBase + "/handhelds/:id/location",
          method: "DELETE"
        },

        // INTERNAL. Use Handheld.accessTokens() instead.
        "prototype$__get__accessTokens": {
          isArray: false,
          url: urlBase + "/handhelds/:id/accessTokens",
          method: "GET"
        },

        // INTERNAL. Use Handheld.accessTokens.create() instead.
        "prototype$__create__accessTokens": {
          url: urlBase + "/handhelds/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use Handheld.accessTokens.destroyAll() instead.
        "prototype$__delete__accessTokens": {
          url: urlBase + "/handhelds/:id/accessTokens",
          method: "DELETE"
        },

        // INTERNAL. Use Handheld.accessTokens.count() instead.
        "prototype$__count__accessTokens": {
          url: urlBase + "/handhelds/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Handheld#create
         * @methodOf lbServices.Handheld
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Handheld` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/handhelds",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Handheld#upsert
         * @methodOf lbServices.Handheld
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Handheld` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/handhelds",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Handheld#exists
         * @methodOf lbServices.Handheld
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/handhelds/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Handheld#findById
         * @methodOf lbServices.Handheld
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Handheld` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/handhelds/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Handheld#find
         * @methodOf lbServices.Handheld
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Handheld` object.)
         * </em>
         */
        "find": {
          isArray: false,
          url: urlBase + "/handhelds",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Handheld#findOne
         * @methodOf lbServices.Handheld
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Handheld` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/handhelds/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Handheld#updateAll
         * @methodOf lbServices.Handheld
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/handhelds/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Handheld#deleteById
         * @methodOf lbServices.Handheld
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/handhelds/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Handheld#count
         * @methodOf lbServices.Handheld
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/handhelds/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Handheld#prototype$updateAttributes
         * @methodOf lbServices.Handheld
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Handheld` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/handhelds/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Handheld#createChangeStream
         * @methodOf lbServices.Handheld
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/handhelds/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Handheld#auth
         * @methodOf lbServices.Handheld
         *
         * @description
         *
         * Get an entity by its id and version.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Handheld` object.)
         * </em>
         */
        "auth": {
          url: urlBase + "/handhelds/auth",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Handheld#register
         * @methodOf lbServices.Handheld
         *
         * @description
         *
         * Get an entity by its id and version.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `registration` – `{handheldRegistrationRequest}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Handheld` object.)
         * </em>
         */
        "register": {
          url: urlBase + "/handhelds/register",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Handheld#work
         * @methodOf lbServices.Handheld
         *
         * @description
         *
         * Get all of the active work this handheld is responsible for.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `id` – `{string=}` - 
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Handheld` object.)
         * </em>
         */
        "work": {
          url: urlBase + "/handhelds/:id/work",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Handheld#getLocation
         * @methodOf lbServices.Handheld
         *
         * @description
         *
         * Get the location this handheld is associated with
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `id` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Handheld` object.)
         * </em>
         */
        "getLocation": {
          url: urlBase + "/handhelds/:id/location",
          method: "GET"
        },

        // INTERNAL. Use CheckitAccessToken.handheld() instead.
        "::get::checkitAccessToken::handheld": {
          url: urlBase + "/accessTokens/:id/handheld",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Handheld#updateOrCreate
         * @methodOf lbServices.Handheld
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Handheld` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Handheld#update
         * @methodOf lbServices.Handheld
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Handheld#destroyById
         * @methodOf lbServices.Handheld
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Handheld#removeById
         * @methodOf lbServices.Handheld
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Handheld#modelName
    * @propertyOf lbServices.Handheld
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Handheld`.
    */
    R.modelName = "Handheld";

    /**
     * @ngdoc object
     * @name lbServices.Handheld.accessTokens
     * @header lbServices.Handheld.accessTokens
     * @object
     * @description
     *
     * The object `Handheld.accessTokens` groups methods
     * manipulating `CheckitAccessToken` instances related to `Handheld`.
     *
     * Call {@link lbServices.Handheld#accessTokens Handheld.accessTokens()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Handheld#accessTokens
         * @methodOf lbServices.Handheld
         *
         * @description
         *
         * Queries accessTokens of handheld.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CheckitAccessToken` object.)
         * </em>
         */
        R.accessTokens = function() {
          var TargetResource = $injector.get("CheckitAccessToken");
          var action = TargetResource["::get::handheld::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Handheld.accessTokens#count
         * @methodOf lbServices.Handheld.accessTokens
         *
         * @description
         *
         * Counts accessTokens of handheld.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.accessTokens.count = function() {
          var TargetResource = $injector.get("CheckitAccessToken");
          var action = TargetResource["::count::handheld::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Handheld.accessTokens#create
         * @methodOf lbServices.Handheld.accessTokens
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CheckitAccessToken` object.)
         * </em>
         */
        R.accessTokens.create = function() {
          var TargetResource = $injector.get("CheckitAccessToken");
          var action = TargetResource["::create::handheld::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Handheld.accessTokens#destroyAll
         * @methodOf lbServices.Handheld.accessTokens
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessTokens.destroyAll = function() {
          var TargetResource = $injector.get("CheckitAccessToken");
          var action = TargetResource["::delete::handheld::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Handheld.accessTokens#destroyById
         * @methodOf lbServices.Handheld.accessTokens
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessTokens.destroyById = function() {
          var TargetResource = $injector.get("CheckitAccessToken");
          var action = TargetResource["::destroyById::handheld::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Handheld.accessTokens#findById
         * @methodOf lbServices.Handheld.accessTokens
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CheckitAccessToken` object.)
         * </em>
         */
        R.accessTokens.findById = function() {
          var TargetResource = $injector.get("CheckitAccessToken");
          var action = TargetResource["::findById::handheld::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Handheld.accessTokens#updateById
         * @methodOf lbServices.Handheld.accessTokens
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CheckitAccessToken` object.)
         * </em>
         */
        R.accessTokens.updateById = function() {
          var TargetResource = $injector.get("CheckitAccessToken");
          var action = TargetResource["::updateById::handheld::accessTokens"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Handheld.location
     * @header lbServices.Handheld.location
     * @object
     * @description
     *
     * The object `Handheld.location` groups methods
     * manipulating `Location` instances related to `Handheld`.
     *
     * Call {@link lbServices.Handheld#location Handheld.location()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Handheld#location
         * @methodOf lbServices.Handheld
         *
         * @description
         *
         * Fetches hasOne relation location.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.location = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::get::handheld::location"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Handheld.location#create
         * @methodOf lbServices.Handheld.location
         *
         * @description
         *
         * Creates a new instance in location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.location.create = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::create::handheld::location"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Handheld.location#destroy
         * @methodOf lbServices.Handheld.location
         *
         * @description
         *
         * Deletes location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.location.destroy = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::destroy::handheld::location"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Handheld.location#update
         * @methodOf lbServices.Handheld.location
         *
         * @description
         *
         * Update location of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Location` object.)
         * </em>
         */
        R.location.update = function() {
          var TargetResource = $injector.get("Location");
          var action = TargetResource["::update::handheld::location"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Schedule
 * @header lbServices.Schedule
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Schedule` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Schedule",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/schedules/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Schedule#createChangeStream
         * @methodOf lbServices.Schedule
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/schedules/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Schedule#getAll
         * @methodOf lbServices.Schedule
         *
         * @description
         *
         * Get all the latest versions of the entities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Schedule` object.)
         * </em>
         */
        "getAll": {
          isArray: false,
          url: urlBase + "/schedules",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Schedule#getById
         * @methodOf lbServices.Schedule
         *
         * @description
         *
         * Get an entity by its id and version.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `version` – `{number=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Schedule` object.)
         * </em>
         */
        "getById": {
          url: urlBase + "/schedules/:entity/:version",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Schedule#getLatest
         * @methodOf lbServices.Schedule
         *
         * @description
         *
         * Get the latest version of the specified entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Schedule` object.)
         * </em>
         */
        "getLatest": {
          url: urlBase + "/schedules/:entity/latest",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Schedule#deleteLatestById
         * @methodOf lbServices.Schedule
         *
         * @description
         *
         * Delete an entity by its id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteLatestById": {
          url: urlBase + "/schedules/:entity/latest",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Schedule#putLatest
         * @methodOf lbServices.Schedule
         *
         * @description
         *
         * Create a new version of this entity
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `data` – `{object=}` - Model instance data
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Schedule` object.)
         * </em>
         */
        "putLatest": {
          url: urlBase + "/schedules/:entity/latest",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Schedule#updateLatest
         * @methodOf lbServices.Schedule
         *
         * @description
         *
         * Update this entity
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `entity` – `{string=}` - 
         *
         *  - `data` – `{object=}` - Model instance data
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Schedule` object.)
         * </em>
         */
        "updateLatest": {
          url: urlBase + "/schedules/:entity/latest",
          method: "PATCH"
        },

        /**
         * @ngdoc method
         * @name lbServices.Schedule#createEntity
         * @methodOf lbServices.Schedule
         *
         * @description
         *
         * Create a new entity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Schedule` object.)
         * </em>
         */
        "createEntity": {
          url: urlBase + "/schedules",
          method: "POST"
        },

        // INTERNAL. Use Work.schedule() instead.
        "::get::work::schedule": {
          url: urlBase + "/work/:id/schedule",
          method: "GET"
        },

        // INTERNAL. Use Work.schedule.create() instead.
        "::create::work::schedule": {
          url: urlBase + "/work/:id/schedule",
          method: "POST"
        },

        // INTERNAL. Use Work.schedule.update() instead.
        "::update::work::schedule": {
          url: urlBase + "/work/:id/schedule",
          method: "PUT"
        },

        // INTERNAL. Use Work.schedule.destroy() instead.
        "::destroy::work::schedule": {
          url: urlBase + "/work/:id/schedule",
          method: "DELETE"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Schedule#modelName
    * @propertyOf lbServices.Schedule
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Schedule`.
    */
    R.modelName = "Schedule";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Report
 * @header lbServices.Report
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Report` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Report",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/reports/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Report#create
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/reports",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#upsert
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/reports",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#exists
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/reports/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#findById
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/reports/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#find
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        "find": {
          isArray: false,
          url: urlBase + "/reports",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#findOne
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/reports/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#updateAll
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/reports/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#deleteById
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/reports/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#count
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/reports/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#prototype$updateAttributes
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - BaseModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/reports/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#createChangeStream
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/reports/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Report#getReportsForLocation
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Get all the events for a location.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `locationId` – `{string=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        "getReportsForLocation": {
          isArray: false,
          url: urlBase + "/reports/events/locations/:locationId",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Report#updateOrCreate
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Report` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Report#update
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Report#destroyById
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Report#removeById
         * @methodOf lbServices.Report
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Report#modelName
    * @propertyOf lbServices.Report
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Report`.
    */
    R.modelName = "Report";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Log
 * @header lbServices.Log
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Log` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Log",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/logs/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Log#create
         * @methodOf lbServices.Log
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Log` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/logs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Log#upsert
         * @methodOf lbServices.Log
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Log` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/logs",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Log#exists
         * @methodOf lbServices.Log
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/logs/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Log#findById
         * @methodOf lbServices.Log
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Log` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/logs/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Log#find
         * @methodOf lbServices.Log
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Log` object.)
         * </em>
         */
        "find": {
          isArray: false,
          url: urlBase + "/logs",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Log#findOne
         * @methodOf lbServices.Log
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Log` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/logs/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Log#updateAll
         * @methodOf lbServices.Log
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/logs/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Log#deleteById
         * @methodOf lbServices.Log
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/logs/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Log#count
         * @methodOf lbServices.Log
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/logs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Log#prototype$updateAttributes
         * @methodOf lbServices.Log
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Log` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/logs/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Log#createChangeStream
         * @methodOf lbServices.Log
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/logs/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Log#updateOrCreate
         * @methodOf lbServices.Log
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Log` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Log#update
         * @methodOf lbServices.Log
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Log#destroyById
         * @methodOf lbServices.Log
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Log#removeById
         * @methodOf lbServices.Log
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Log#modelName
    * @propertyOf lbServices.Log
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Log`.
    */
    R.modelName = "Log";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Status
 * @header lbServices.Status
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Status` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Status",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/status/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Status#alerts
         * @methodOf lbServices.Status
         *
         * @description
         *
         * Get the status alerts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `req` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Status` object.)
         * </em>
         */
        "alerts": {
          url: urlBase + "/status/alerts",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Status#modelName
    * @propertyOf lbServices.Status
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Status`.
    */
    R.modelName = "Status";


    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
