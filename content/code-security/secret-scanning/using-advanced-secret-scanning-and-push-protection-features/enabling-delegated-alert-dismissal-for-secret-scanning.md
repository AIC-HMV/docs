---
title: Enabling delegated alert dismissal for secret scanning
intro: 'You can use delegated alert dismissal to control who can dismiss an alert found by {% data variables.product.prodname_secret_scanning %}.'
permissions: '{% data reusables.permissions.delegated-alert-dismissal %}'
versions:
  feature: security-delegated-alert-dismissal
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Delegated alert dismissal
---

## About enabling delegated alert dismissal

{% data reusables.security.delegated-alert-dismissal-intro %}

## Configuring delegated dismissal for a repository

>[!NOTE] If an organization owner configures delegated alert dismissal via an enforced security configuration, the settings can't be changed at the repository level.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "{% data variables.product.prodname_secret_protection %}", to the right of "Prevent direct alert dismissals", click **Enable**.

## Configuring delegated dismissal for an organization

You must configure delegated dismissal for your organization using a custom security configuration. You can then apply the security configuration to all (or selected) repositories in your organization.

1. Create a new custom security configuration, or edit an existing one. See [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/creating-a-custom-security-configuration#creating-a-custom-security-configuration).
1. When defining the custom security configuration, under "{% data variables.product.prodname_secret_scanning_caps %}", ensure that the dropdown menu for "Prevent direct alert dismissals" is set to **Enabled**.
1. Click **Save configuration**.
1. Apply the security configuration to all (or selected) repositories in your organization. See [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-a-custom-security-configuration).

To learn more about security configurations, see [AUTOTITLE](/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-enabling-security-features-at-scale).

{% ifversion secret-scanning-alert-dismiss-custom-role %}

## Configuring delegated dismissal for an enterprise

1. Create a new custom security configuration, or edit an existing one. See [AUTOTITLE](/admin/managing-code-security/securing-your-enterprise/creating-a-custom-security-configuration-for-your-enterprise).
1. When defining the custom security configuration, under "{% data variables.product.prodname_secret_protection %}", ensure that the dropdown menu for "Prevent direct alert dismissals" is set to **Enabled**.
1. Click **Save configuration**.
1. Apply the security configuration to all (or selected) repositories in your enterprise. See [AUTOTITLE](/admin/managing-code-security/securing-your-enterprise/applying-a-custom-security-configuration-to-your-enterprise).

{% endif %}
