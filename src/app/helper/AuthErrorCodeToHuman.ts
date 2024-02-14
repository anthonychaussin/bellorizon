export namespace AuthErrorCodeToHuman {
  export function convertMessage(code: string) {
    switch (code) {
      case "auth/wrong-password":
      case "auth/invalid-email":
      case "auth/invalid-credential":
      case "auth/email-already-in-use": {
        return 'Erreur identifiants incorecte.';
      }
      case "auth/admin-restricted-operation": {
        return 'Erreur opération administrateur uniquement';
      }
      case "auth/app-not-authorized":
      case "auth/invalid-api-key":
      case "auth/invalid-app-credential": {
        return 'Erreur application non autorisée.';
      }
      case "auth/app-not-installed": {
        return 'Erreur application non installée';
      }
      case "auth/captcha-check-failed": {
        return 'Erreur vérification humaine invalide';
      }
      case "auth/code-expired": {
        return 'Erreur session expirée';
      }
      case "auth/credential-already-in-use": {
        return 'Erreur indentifiants invalide';
      }
      case "auth/recaptcha-not-enabled": {
        return 'Erreur captcha non activé';
      }
      case "auth/weak-password": {
        return 'Erreur le mot de passe est trop faible';
      }
      case "auth/unverified-email": {
        return 'Erreur email non vérifier';
      }
      case "auth/user-cancelled": {
        return 'Erreur utilisateur supprimé';
      }
      case "auth/user-not-found": {
        return 'Erreur utilisateur introuvable';
      }
      case "auth/user-disabled": {
        return 'Erreur l\'utilisateur est désactivé';
      }
      case "auth/user-mismatch": {
        return 'Erreur l\'utilisateur ne correspond pas';
      }
      case "auth/user-signed-out": {
        return 'Erreur l\'utilisateur est déconnecté';
      }
      case "auth/timeout": {
        return 'Erreur le serveur n\'a pas répondue assé vite.';
      }
      case "auth/user-token-expired": {
        return 'Erreur session expirée';
      }
      case "auth/too-many-requests": {
        return 'Erreur trop de tentative, veuillez ré-essayé plus tard.';
      }
      case "auth/quota-exceeded": {
        return 'Erreur quota d\'inscription dépassé, veuillez faire une nouvelle tentative demain.';
      }
      case "auth/redirect-cancelled-by-user": {
        return 'Erreur redirection annulé par l\'utilisateur';
      }
      case "auth/redirect-operation-pending": {
        return 'Erreur en attente de redirection.';
      }
      case "auth/rejected-credential": {
        return 'Erreur identification rejeté';
      }
      case "auth/maximum-second-factor-count-exceeded": {
        return 'Erreur nombre de tentative de vérification double facteur dépassé';
      }case "auth/missing-ios-bundle-id":
      case "auth/missing-or-invalid-nonce": {
        return 'Erreur identification rejeté';
      }
      case "auth/missing-multi-factor-info": {
        return 'Erreur authentification à double facteur introuvable.';
      }
      case "auth/missing-multi-factor-session": {
        return 'Erreur authentification à double facteur manquante.';
      }
      case "auth/missing-phone-number": {
        return 'Erreur numéro de téléphone manquant';
      }
      case "auth/missing-verification-id": {
        return 'Erreur identifiant de vérification invalide.';
      }
      case "auth/app-deleted": {
        return 'Erreur l\'application à été supprimée par le propriétaire.';
      }
      case "auth/account-exists-with-different-credential": {
        return 'Erreur identifiants invalide ou le compte n\'existe pas.';
      }
      case "auth/network-request-failed": {
        return 'Erreur impossible de se connecter, la connexion à été intérompue.';
      }
      case "auth/null-user": {
        return 'Erreur l\'utilisateur n\'existe pas.';
      }
      case "auth/no-auth-event": {
        return 'Erreur l\' authentification à échouée';
      }
      case "auth/no-such-provider": {
        return 'Erreur le mode d\'authentification n\'existe pas.';
      }
      case "auth/operation-not-allowed": {
        return 'Erreur action non autoriser.';
      }
      case "auth/operation-not-supported-in-this-environment": {
        return 'Erreur action non supportée.';
      }
      case "auth/popup-blocked": {
        return 'Erreur le navigateur à bloqué la fenêtre d\'authentification.';
      }
      case "auth/popup-closed-by-user":
      case "auth/cancelled-popup-request": {
        return 'Erreur la fenêtre d\'autentification à été fermée.';
      }
      case "auth/multi-factor-info-not-found": {
        return 'Erreur information d\'identification double facteur manquante.';
      }
      case "auth/multi-factor-auth-required": {
        return 'Erreur l\'authentification par double facteur est requise.';
      }
      case "auth/missing-android-pkg-name":
      case "auth/missing-app-credential": {
        return 'Erreur identification de l\'application manquante';
      }
      case "auth/missing-verification-code": {
        return 'Erreur code de vérification manquant';
      }
      case "auth/invalid-phone-number": {
        return 'Erreur numéro de téléphone invalide';
      }
      case "auth/unauthorized-domain": {
        return 'Erreur domaine non autoriser.';
      }
      case "auth/email-change-needs-verification": {
        return 'Erreur veuillez vérifier le changement de votre email de connexion';
      }
      case "auth/invalid-verification-code": {
        return 'Erreur code de vérification invalide';
      }
      case "auth/emulator-config-failed":
      case "auth/expired-action-code":
      case "auth/internal-error":
      case "auth/invalid-app-id":
      case "auth/invalid-user-token":
      case "auth/invalid-auth-event":
      case "auth/invalid-cert-hash":
      case "auth/invalid-continue-uri":
      case "auth/invalid-cordova-configuration":
      case "auth/invalid-custom-token":
      case "auth/invalid-dynamic-link-domain":
      case "auth/invalid-emulator-scheme":
      case "auth/requires-recent-login":
      case "auth/dependent-sdk-initialized-before-auth":
      case "auth/dynamic-link-not-activated":
      case "auth/invalid-message-payload":
      case "auth/invalid-multi-factor-session":
      case "auth/invalid-oauth-client-id":
      case "auth/invalid-oauth-provider":
      case "auth/invalid-action-code":
      case "auth/invalid-persistence-type":
      case "auth/invalid-provider-id":
      case "auth/invalid-recipient-email":
      case "auth/invalid-sender":
      case "auth/invalid-verification-id":
      case "auth/invalid-tenant-id":
      case "auth/auth-domain-config-required":
      case "auth/missing-continue-uri":
      case "auth/missing-iframe-start":
      case "auth/provider-already-linked":
      case "auth/second-factor-already-in-use":
      case "auth/tenant-id-mismatch":
      case "auth/unauthorized-continue-uri":
      case "auth/unsupported-first-factor":
      case "auth/unsupported-persistence-type":
      case "auth/unsupported-tenant-operation":
      case "auth/web-storage-unsupported":
      case "auth/already-initialized":
      case "auth/missing-recaptcha-token":
      case "auth/invalid-recaptcha-token":
      case "auth/invalid-recaptcha-action":
      case "auth/missing-client-type":
      case "auth/missing-recaptcha-version":
      case "auth/invalid-recaptcha-version":
      case "auth/invalid-req-type":
      case "auth/custom-token-mismatch":
      case "auth/cors-unsupported":
      case "auth/argument-error":
      case "auth/cordova-not-ready":
      default :{
        return 'Erreur inconue';
      }
    }
  }
}
