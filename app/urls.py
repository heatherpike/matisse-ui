from django.conf.urls import patterns, url

from app import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
    url(r'^analyze/(?P<photo_uid>[0-9]+)/$', views.analyze, name='analyze'),
)
