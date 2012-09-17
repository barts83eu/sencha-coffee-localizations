Ext.define "Locale.controller.Help",
  extend: "Ext.app.Controller"
  config:
    control:
      selectfield:
        change: "onHelpClick"

  onHelpClick: (message) ->
    alert 'helllooooo'

  onAboutClick: ->
    alert 'about click'


