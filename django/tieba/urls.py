from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'tieba.views.home', name='home'),
    url(r'^share/$', 'tieba.views.share', name='share'),
    url(r'^send/$', 'tieba.views.send', name='send'),
    url(r'^tab1/$', 'tieba.views.tab1', name='tab1'),


    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
)
