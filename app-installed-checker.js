import { Linking, Platform } from 'react-native';
import CheckPackageInstallation from './android';

class AppInstalledChecker {

    static checkPackageName(packagename) {
        return new Promise((resolve, reject) => {
            CheckPackageInstallation.isPackageInstalled(packagename, (isInstalled) => {
                resolve(isInstalled);
            });
        });
    } 
}

export default AppInstalledChecker;
