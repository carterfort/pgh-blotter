
@extends('layouts.standard')


@section('main')



    <div id="incidents">


        <div class="row">

            <div class="col-sm-6">
                <h3>All Incidents (<span>@{{ incidents.length }}</span>)</h3>

                <div class="progress">
                    <div class="progress-bar progress-bar-success" id="loaded-incidents-progress"></div>
                </div>

            </div>

            <div class="col-sm-6">

                <template v-if="loading">
                    Loading...
                </template>
                <template v-repeat="incident in incidents">
                    <h4>Incident occurred @{{ incident.occurred_at }}</h4>
                    <div class="list-group violation-group">
                        <div class="list-group-item"
                             v-repeat="incident.violations"
                             v-style="background-color: incident.color"
                                >
                            <h5>Violaton of Section @{{ section_number }}</h5>

                            <p>@{{ description }}</p>
                        </div>
                    </div>
                </template>
            </div>

        </div>

    </div>

    @stop

@section('scripts')

    <style>
        .done {
            text-decoration: line-through;
        }

        .violation-group {
            color: white;
        }
    </style>
    <script>

        Vue.filter('prettyDate', function (value) {

        })

        var demo = new Vue({
            el: '#incidents',
            data: {
                loading : true,
                incidents : []
            }
        })

        $.get("{{route('api.v1.incidents.count')}}", function(totalIncidents){

            var offset = 0;

            loadWithOffset(offset)

            function loadWithOffset(offset)
            {
                $.ajax({
                    url: "{{ route('api.v1.incidents.all-with-offset') }}?offset="+offset,
                    success: function(incidents) {
                        demo.incidents = demo.incidents.concat(incidents);
                        offset += incidents.length
                        var percentageComplete = (offset / totalIncidents) * 100

                        $("#loaded-incidents-progress").animate({width : percentageComplete+'%'}, 100)

                        if (offset < totalIncidents)
                        {
                            setTimeout(loadWithOffset(offset), 500);
                        }
                    }
                });
            }

            demo.loading = false;


        });


    </script>

    @stop